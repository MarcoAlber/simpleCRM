export class User {
    firstName: string;
    surname: string;
    dateOfBirth: number;
    zipcode: number;
    city: string;
    street: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.surname = obj ? obj.surname : '';
        this.dateOfBirth = obj ? obj.dateOfBirth : '';
        this.zipcode = obj ? obj.zipcode : '';
        this.city = obj ? obj.city : '';
        this.street = obj ? obj.street : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            surname: this.surname,
            dateOfBirth: this.dateOfBirth,
            zipcode: this.zipcode,
            city: this.city,
            street: this.street
        };
    }
}