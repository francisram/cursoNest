
export class Pokemon {

    //nivel standart
    /*
    public id: number;
    public name: string;

    constructor(id:number,name:string) {
        this.id = id;
        this.name = name;
        console.log('constructor llamado');

    }
    */

    //colocando el nivel de acceso 

    constructor(public id:number, public name:string) { }
}

export const charmander1 = new Pokemon(4,"charmander");