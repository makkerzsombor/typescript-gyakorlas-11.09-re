import { Book } from "./Book";

export class PaperBook implements Book{
    title: string;
    price: number;
    isbn: string;
    weight: number;

    constructor(title: string, price: number, weight: number, isbn: string){
        this.title = title;
        this.price = price;
        this.isbn = isbn;
        this.weight = weight;
    }

}