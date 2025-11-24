import { Ingredient } from "../ingredient/ingredient.model";
import { Step } from "../step/step.model";

export class Recipe {
    id: number;
    name: string;
    imageUrl: string;
    ingredients?: Ingredient[];
    steps?: Step[];

    constructor(id: number, name: string, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}
