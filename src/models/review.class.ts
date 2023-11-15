export class Review {
    name: string;
    rating: any;
    text: string;
    id: string;

    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.rating = obj ? parseFloat(obj.rating) : '';
        this.text = obj ? obj.text : '';
        this.id = obj ? obj.id : '';
    }

    public toJSON() {
        return {
            name: this.name,
            rating: this.rating,
            text: this.text,
            id: this.id
        };
    }
}