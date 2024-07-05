export const pokemnIds = [1,20,30,40,50,60];

pokemnIds.push(150);
pokemnIds.push(+ '15'); //para convertir un string en un numero

interface Pokemon{
    id: number,
    name: string
    age?: number
}

export const bulbasur:Pokemon = {
    id: 1,
    name:"bulbasul",

}

export const charmander:Pokemon = {
    id: 0,
    name: ""
}

export const pokemons:Pokemon[] = [];
pokemons.push(charmander,bulbasur);



console.log(pokemons);