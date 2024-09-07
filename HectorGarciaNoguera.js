// entrenadores
const entrenadores = [
    {
        nombre: "Entrenador 1",
        equipo: [
            { nombre: "Charizard", nivel: 25, tipo: "Fuego" },
            { nombre: "Blastoise", nivel: 22, tipo: "Agua" },
            { nombre: "Venusaur", nivel: 28, tipo: "Planta" },
            { nombre: "Pikachu", nivel: 30, tipo: "Eléctrico" },
            { nombre: "Machamp", nivel: 27, tipo: "Pelea" },
            { nombre: "Gengar", nivel: 26, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 2",
        equipo: [
            { nombre: "Typhlosion", nivel: 29, tipo: "Fuego" },
            { nombre: "Feraligatr", nivel: 32, tipo: "Agua" },
            { nombre: "Meganium", nivel: 33, tipo: "Planta" },
            { nombre: "Raichu", nivel: 34, tipo: "Eléctrico" },
            { nombre: "Lucario", nivel: 31, tipo: "Pelea" },
            { nombre: "Mimikyu", nivel: 35, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 3",
        equipo: [
            { nombre: "Arcanine", nivel: 36, tipo: "Fuego" },
            { nombre: "Swampert", nivel: 37, tipo: "Agua" },
            { nombre: "Sceptile", nivel: 38, tipo: "Planta" },
            { nombre: "Electivire", nivel: 39, tipo: "Eléctrico" },
            { nombre: "Gallade", nivel: 40, tipo: "Pelea" },
            { nombre: "Banette", nivel: 41, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 4",
        equipo: [
            { nombre: "Infernape", nivel: 42, tipo: "Fuego" },
            { nombre: "Empoleon", nivel: 43, tipo: "Agua" },
            { nombre: "Torterra", nivel: 44, tipo: "Planta" },
            { nombre: "Luxray", nivel: 45, tipo: "Eléctrico" },
            { nombre: "Conkeldurr", nivel: 46, tipo: "Pelea" },
            { nombre: "Cofagrigus", nivel: 47, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 5",
        equipo: [
            { nombre: "Blaziken", nivel: 48, tipo: "Fuego" },
            { nombre: "Samurott", nivel: 49, tipo: "Agua" },
            { nombre: "Serperior", nivel: 50, tipo: "Planta" },
            { nombre: "Zebstrika", nivel: 51, tipo: "Eléctrico" },
            { nombre: "Mienshao", nivel: 52, tipo: "Pelea" },
            { nombre: "Chandelure", nivel: 53, tipo: "Fantasma" }
        ]
    }
];

// Equipo del Rival
const rivalEquipo = [
    { nombre: "Articuno", nivel: 20, tipo: "Hielo" },
    { nombre: "Glaceon", nivel: 20, tipo: "Hielo" },
    { nombre: "Froslass", nivel: 20, tipo: "Hielo" },
    { nombre: "Lapras", nivel: 20, tipo: "Hielo" },
    { nombre: "Mamoswine", nivel: 20, tipo: "Hielo" },
    { nombre: "Weavile", nivel: 20, tipo: "Hielo" }
];

// Gerarquia de pokemon
const tablaTipos = {
    "Insecto": { superEfectivo: ["Planta", "Psíquico", "Oscuro"], noMuyEfectivo: ["Fuego", "Pelea", "Veneno", "Volador", "Fantasma", "Acero", "Hada"], debilContra: ["Fuego", "Volador", "Roca"] },
    "Oscuro": { superEfectivo: ["Fantasma", "Psíquico"], noMuyEfectivo: ["Oscuro", "Hada", "Pelea"], debilContra: ["Pelea", "Insecto", "Hada"] },
    "Dragón": { superEfectivo: ["Dragón"], noMuyEfectivo: ["Acero", "Hada (nulo)"], debilContra: ["Hielo", "Dragón", "Hada"] },
    "Eléctrico": { superEfectivo: ["Volador", "Agua"], noMuyEfectivo: ["Dragón", "Eléctrico", "Planta", "Tierra (nulo)"], debilContra: ["Tierra"] },
    "Hada": { superEfectivo: ["Oscuro", "Dragón", "Pelea"], noMuyEfectivo: ["Fuego", "Veneno", "Acero"], debilContra: ["Veneno", "Acero"] },
    "Pelea": { superEfectivo: ["Oscuro", "Hielo", "Acero", "Normal", "Roca"], noMuyEfectivo: ["Insecto", "Hada", "Veneno", "Psíquico", "Volador", "Fantasma (nulo)"], debilContra: ["Volador", "Psíquico", "Hada"] },
    "Fuego": { superEfectivo: ["Insecto", "Planta", "Acero", "Hielo"], noMuyEfectivo: ["Dragón", "Fuego", "Agua", "Roca"], debilContra: ["Agua", "Tierra", "Roca"] },
    "Volador": { superEfectivo: ["Insecto", "Planta", "Pelea"], noMuyEfectivo: ["Eléctrico", "Roca", "Acero"], debilContra: ["Eléctrico", "Hielo", "Roca"] },
    "Fantasma": { superEfectivo: ["Fantasma", "Psíquico"], noMuyEfectivo: ["Oscuro", "Normal (nulo)"], debilContra: ["Fantasma", "Oscuro"] },
    "Planta": { superEfectivo: ["Tierra", "Roca", "Agua"], noMuyEfectivo: ["Volador", "Veneno", "Insecto", "Acero", "Fuego", "Planta", "Dragón"], debilContra: ["Volador", "Veneno", "Insecto", "Fuego", "Hielo"] },
    "Tierra": { superEfectivo: ["Eléctrico", "Fuego", "Roca", "Acero", "Veneno"], noMuyEfectivo: ["Insecto", "Planta", "Volador (nulo)"], debilContra: ["Planta", "Hielo", "Agua"] },
    "Hielo": { superEfectivo: ["Dragón", "Planta", "Tierra", "Volador"], noMuyEfectivo: ["Fuego", "Hielo", "Acero", "Agua"], debilContra: ["Fuego", "Pelea", "Roca", "Acero"] },
    "Normal": { superEfectivo: [], noMuyEfectivo: ["Acero", "Roca", "Fantasma (nulo)"], debilContra: ["Pelea"] },
    "Veneno": { superEfectivo: ["Planta", "Hada"], noMuyEfectivo: ["Veneno", "Tierra", "Roca", "Fantasma", "Acero (nulo)"], debilContra: ["Tierra", "Psíquico"] },
    "Psíquico": { superEfectivo: ["Pelea", "Veneno"], noMuyEfectivo: ["Psíquico", "Acero", "Oscuro (nulo)"], debilContra: ["Insecto", "Oscuro", "Fantasma"] },
    "Roca": { superEfectivo: ["Insecto", "Fuego", "Hielo", "Volador"], noMuyEfectivo: ["Tierra", "Pelea", "Acero"], debilContra: ["Pelea", "Tierra", "Acero", "Agua", "Planta"] },
    "Acero": { superEfectivo: ["Hada", "Hielo", "Roca"], noMuyEfectivo: ["Eléctrico", "Fuego", "Acero", "Agua"], debilContra: ["Fuego", "Pelea", "Tierra"] },
    "Agua": { superEfectivo: ["Fuego", "Roca", "Tierra"], noMuyEfectivo: ["Dragón", "Planta", "Agua"], debilContra: ["Eléctrico", "Planta"] }
};

// array para tener todos los pokemones de los equipos de todos los entrenadores juntos
const equipos = entrenadores.map(element => element.equipo)
const todosLosEquipos = equipos.flat()
const pokemonsRest = [...todosLosEquipos]

// Desafio 1: Pokémon con Mayor y Menor Nivel
const PokemonConMayorYMenorNivel = (PokeDeEntrenadores) => {

    const mayor = [...PokeDeEntrenadores].reduce((acumulador, valorActual) => {
        if (acumulador.nivel > valorActual.nivel) {
            return acumulador
        } else {
            return valorActual
        }
    }, PokeDeEntrenadores[0])

    const menor = [...PokeDeEntrenadores].reduce((acumulador, valorActual) => {
        if (acumulador.nivel < valorActual.nivel) {
            return acumulador
        } else {
            return valorActual
        }
    }, PokeDeEntrenadores[0])

    console.log(`// 1 El Pokemon con el nivel mas alto es ${mayor.nombre} (Nivel ${mayor.nivel})`)
    console.log(`// 1 El Pokemon con el nivel mas bajo es ${menor.nombre} (Nivel ${menor.nivel})`)
}
PokemonConMayorYMenorNivel(todosLosEquipos)


// Desafio 2: Crea una función que devuelva todos los pokemones que contengan un string pasado como argumento. No puede devolver undefined

const buscarPokemon = (texto, PokeDeEntrenadores) => {
    const estandarText = texto.toLowerCase()
    const buscar = PokeDeEntrenadores.filter(element => element.nombre.toLowerCase().includes(estandarText))
    if (texto === "") {
        console.log("// 2 Debe insertar una cadena de texto en el parametro de la función")
    } else {
        console.log("// 2 Lista de pokemons que incluyen el texto indicado: ",buscar)
    }
}

buscarPokemon("p", todosLosEquipos)

// Desafio 3: Crea una función que retorne el tipo cuyos Pokémon tienen un promedio de nivel mayor.

const TipoDePokemonConPromedioDeNivelMasFuerte = (PokeDeEntrenadores) => {

    const agrupadoPorTipo = PokeDeEntrenadores.reduce((acumulador, valorActual) => {
        (acumulador[valorActual.tipo] = acumulador[valorActual.tipo] || []).push(valorActual.nivel)
        return acumulador
    }, {})

    const data = Object.entries(agrupadoPorTipo).map((element) => {
        const totalNiveles = element[1].reduce((a, b) => a + b, 0)
        const promedio = totalNiveles / element[1].length
        const tipo = element[0]
        return { tipo, promedio }
    })

    const TipoPokemonConPromedioMasFuerte = data.reduce((acum, pokemon) => {
        return pokemon.promedio > acum.promedio ? pokemon : acum
    })
    console.log(`// 3 El tipo de Pokemon con promedio mas alto entre todos los entrenadores es ${TipoPokemonConPromedioMasFuerte.tipo}, con nivel promedio de ${TipoPokemonConPromedioMasFuerte.promedio}`)
}
TipoDePokemonConPromedioDeNivelMasFuerte(todosLosEquipos)

// desafio 4: crea el mejor equipo considerando las reglas

const equipoSuperior = (tablaDeGerarquia, equipoRival, pokemonsArray) => {
    const gerarquiaPokemon = Object.entries(tablaDeGerarquia).flat()

    let miEquipo = []
    let pokeTipo = []

    const data = gerarquiaPokemon.forEach((element, index) => {
        if (index % 2 === 0) {
            pokeTipo.push({
                tipo: element,
                debil: gerarquiaPokemon[index + 1].debilContra,
                efectivo: gerarquiaPokemon[index + 1].superEfectivo
            })
        }
    })

    const pokeRiv = equipoRival.map((pokemonRival) => pokemonRival.tipo)

    const MyTeam = pokeRiv.forEach((element) => {

        const tipoDePokeRival = pokeTipo.findIndex((e) => e.tipo === element)
        let debil = pokeTipo[tipoDePokeRival].debil
        let fuerte = pokeTipo[tipoDePokeRival].efectivo

        const pokeIdeal = pokemonsArray.sort((a, b) => {
            return b.nivel - a.nivel
        }).sort((a, b) => {
            const AfuerteVsHielo = debil.includes(a.tipo)
            const BfuerteVsHielo = debil.includes(b.tipo)
            const AdebilVsHielo = fuerte.includes(a.tipo)
            const BdebilVsHielo = fuerte.includes(b.tipo)
            if (AfuerteVsHielo && !BfuerteVsHielo) {
                return -1
            } else if (!AfuerteVsHielo && BfuerteVsHielo) {
                return 1
            } else if (AdebilVsHielo && !BdebilVsHielo) {
                return 1
            } else if (!AdebilVsHielo && BdebilVsHielo) {
                return -1
            } else {
                return 0
            }
        })

    let pokeElegido = pokeIdeal.shift()
    miEquipo.push(pokeElegido)
})
console.log("// 4 El equipo elegido para enfrentarme al equipo rival es:" , miEquipo)
}
equipoSuperior(tablaTipos, rivalEquipo, pokemonsRest)
