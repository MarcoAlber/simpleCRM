import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Company } from 'src/models/company.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  companies: Company[] = [];

  constructor(private firestore: Firestore) {
    this.getCompanies();
  }

  async getCompanies() {
    let companiesCollection = collection(this.firestore, 'companies');

    try {
      let querySnapshot = await getDocs(companiesCollection);

      querySnapshot.forEach((doc) => {
        let companyData = doc.data();
        let currentCompany = new Company(companyData);
        currentCompany.id = doc.id;
        this.companies.push(currentCompany);
        console.log(this.companies);

      });
      this.createChart();
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten:', error);
    }
  }

  createChart() {
    let sortedCompanies = this.companies.slice().sort((a, b) => b.expenses - a.expenses);
    let top5Companies = sortedCompanies.slice(0, 5);
    let otherCompanies = sortedCompanies.slice(5);
    let labels = top5Companies.map(company => company.name);
    let data = top5Companies.map(company => company.expenses);
    let othersExpenses: number = 0;

    if (otherCompanies.length > 0) {
      labels.push("Others");

      for (let company of otherCompanies) {
        console.log("expenses", company.expenses);
        othersExpenses += company.expenses;
      }

      data.push(othersExpenses);
      console.log("data", data);
    }
    this.setChart(labels, data);
  }

  setChart(labels: string[], data: number[]) {
    const backgroundColors = [];

    for (let i = 0; i < 6; i++) {
      backgroundColors.push(this.randomColor());
    }

    new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'My Dataset',
          data: data,
          backgroundColor: backgroundColors,
          hoverOffset: 4
        }]
      }
    });
  }

  randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var color = "rgb(" + x + "," + y + "," + z + ")";
    return color;
  }
}
