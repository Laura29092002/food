export class Step {
    id: number;
    number: number;
    description: string;
    recipe_id: number;

    constructor(id: number, number: number, description: string, recipe_id: number) {
        this.id = id;
        this.number = number;
        this.description = description;
        this.recipe_id = recipe_id;
    }
}
