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

get imageUrl(): string  {   
    return `https://img.pokemondb.net/artwork/large/charmander.jpg` 
 }

constructor(
            public readonly id:number,
            public name:string,
            // public imageUrl: string
            ) {}

            scream(){
                console.log(`${this.name}!!!`);
            }

}



export const charmander1 = new Pokemon(4,"charmander");
console.log(charmander1);
charmander1.scream();
