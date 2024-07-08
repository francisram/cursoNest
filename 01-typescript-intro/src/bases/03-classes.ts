import axios from "axios";
import { Move, PokeApiresponse } from "../interfaces/pokeapi-response.interface";
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

           async getMoves(): Promise<Move[]>{
               // return 10;

              //  const moves = 0;
                //const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4'); // datos estructurados
                const {data} = await axios.get<PokeApiresponse>('https://pokeapi.co/api/v2/pokemon/4'); // datos des estructurados
                //console.log(resp.data.moves);
                 console.log(data.abilities);

                return data.moves;
            }

}



export const charmander1 = new Pokemon(4,"charmander");
console.log(charmander1);
charmander1.scream();

//console.log(charmander1.getMoves());

charmander1.getMoves();
