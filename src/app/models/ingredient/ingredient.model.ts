export class Ingredient {
    id: number;
    name: string;
    quantity?: number;
    imageUrl?: string;
    category_id?: string;

    constructor(id: number, name: string, quantity: number, imageUrl?: string, category_id?: string) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.category_id = category_id;
    }
}
