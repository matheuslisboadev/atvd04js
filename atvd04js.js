const hobbies = [
    {
        nome: "Jogar videogame"
    },
    {
        nome:  "Programar"
    },
    {
        nome: "Assistir filmes e series"
    },
    {
        nome: "Modelar"
    },
    {
        nome: "Drone"
    }
];

const exibirHobbies = () => {
    hobbies.forEach((hobby)=> {
        console.log("Meu hobbie é " + hobby.nome);
    });
    }

const exibirHobbies2 = () => { 
         hobbies.map((hobby) => {
        console.log("O incrível mundo de " + hobby.nome);
    });
  
}

const exibirHobbies3 = () => {
    const hobbiesFiltrados = hobbies.filter(function(hobby) {
        return hobby.nome[0] === "D";
    });
    console.log(hobbiesFiltrados);
}

const exibirHobbies4 = () => {
   const posicao = hobbies.findIndex(function(hobby) {
        return hobby.nome === 'Jogar videogame';
    });
    console.log("Jogar videogame está na posição " + posicao);
}
    const exibirHobbies5 = () => {
const todosHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + "  " + hobby.nome; }, "");
    
    console.log("Meus hobbies são: " + todosHobbies);
}

const exibirHobbies6 = () => {
const temVHobby = hobbies.some(function(hobby) {
    return hobby.nome[0] === 'v'; });
    
    console.log("Eu tenho um hobby que começa com v? " + temVHobby);
}

const exibirHobbies7 = () => {
const extensao = hobbies.every(function(hobby) { return hobby.length < 15; });
console.log("Todos os meus hobbies têm menos de 15 letras? " + extensao);
}


const exibirHobbies8 = () => {
    const seteLetrasHobby = hobbies.find(function(hobby) {
        return hobby.nome.length === 7; });
        console.log("Meu primeiro hobby com 8 letras é: " + seteLetrasHobby.nome);
}


const exibirHobbies9 = () => {
    const tresHobbies = hobbies.slice(0, 3);
     console.log("Meus três primeiros hobbies são: ", tresHobbies);
}

exibirHobbies();
exibirHobbies2();
exibirHobbies3();
exibirHobbies4();
exibirHobbies5();
exibirHobbies6();
exibirHobbies7();
exibirHobbies8();
exibirHobbies9();
