export class Event {
    name: string;
    date: number;
    description: string;
    id: string;

    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.date = obj ? obj.date : '';
        this.description = obj ? obj.description : '';
        this.id = obj ? obj.id : '';
    }

    public toJSON() {
        return {
            name: this.name,
            date: this.date,
            description: this.description,
            id: this.id
        };
    }
}