export class Film {
    id?: number;
    name: string;
    category: string;
    imgLink: string;
    price:  number;

    constructor(id: number,
        name: string,
        category: string,
            imglink: string,
            prince: number
            ){
                this.id = id;
                this.name = name;
                this.category = category;
                this.imgLink = imglink;
                this.price = prince;
            }
        }