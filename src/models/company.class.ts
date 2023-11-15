export class Company {
    name: string;
    email: string;
    id: string;
    expenses: any;
    phone: any;
    zipcode: any;
    city: string;
    street: string;

    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.email = obj ? obj.email : '';
        this.id = obj ? obj.id : '';
        this.phone = obj ? parseFloat(obj.phone) : '';
        this.expenses = obj ? parseFloat(obj.expenses) : '';
        this.zipcode = obj ? parseFloat(obj.zipcode) : '';
        this.city = obj ? obj.city : '';
        this.street = obj ? obj.street : '';
    }

    public toJSON() {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone,
            expenses: this.expenses,
            id: this.id,
            zipcode: this.zipcode,
            city: this.city,
            street: this.street
        };
    }
}