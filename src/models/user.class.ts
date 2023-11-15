export class User {
    firstName: string;
    surname: string;
    email: string;
    id: string;
    password: string;
    birthday: number;
    phone: number;
    position: string;
    zipcode: number;
    city: string;
    street: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.surname = obj ? obj.surname : '';
        this.email = obj ? obj.email : '';
        this.id = obj ? obj.id : '';
        this.password = obj ? obj.password : '';
        this.phone = obj ? obj.phone : '';
        this.birthday = obj ? obj.birthday : '';
        this.zipcode = obj ? obj.zipcode : '';
        this.position = obj ? obj.position : '';
        this.city = obj ? obj.city : '';
        this.street = obj ? obj.street : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            surname: this.surname,
            email: this.email,
            phone: this.phone,
            password: this.password,
            id: this.id,
            birthday: this.birthday,
            position: this.position,
            zipcode: this.zipcode,
            city: this.city,
            street: this.street
        };
    }
}