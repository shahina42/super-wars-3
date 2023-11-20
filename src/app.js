const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
    players.forEach((item, index) => {
        detailedPlayers.push({
            name: item,
            strength: getRandomStrength(),
            image: 'images/super-' + (index + 1) + '.png',
            type: index % 2 == 0 ? 'hero' : 'villain',
            id: index + 1,
        });
    });
    return detailedPlayers;
}

// getting random strength

const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const see = (play) => {
    let player = document.createElement("div");
    player.classList.add("player");

    let div1 = document.createElement('div');
    div1.className = 'name';
    div1.textContent = play.name;

    let div2 = document.createElement('div');
    div2.textContent = play.strength;
    div2.className = 'strength';

    let image = document.createElement("img");
    image.setAttribute("src", play.image);
    image.setAttribute('alt', '');

    player.append(image, div1, div2);
    return player;
}

const buildPlayers = (players, type) => {
    let fragment = document.createElement('div');
    players
        .filter((player) => player.type == type)
        .forEach((player) => fragment.append(see(player)));

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

    return fragment.innerHTML;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}

// var score = document.querySelector("#score")

let array1 = [];
let array2 = [];
let sum1 = 0;
let sum2 = 0;
//   let heroscore=0;
//   let villainscore ;
var hs = localStorage.getItem('scoreh',hs) || 0;
var vs = localStorage.getItem('scorev',vs) || 0;

const viewPlayerss = (players) => {
    const heroesContainer = document.getElementById("heroes");
    const villainsContainer = document.getElementById("villains");

    heroesContainer.innerHTML = buildPlayers(players, "hero");
    villainsContainer.innerHTML = buildPlayers(players, "villain");
    array1 = players.filter(player => player.type === "hero").map(hero => hero.strength);
    array2 = players.filter(player => player.type === "villain").map(villain => villain.strength)
};

window.onload = () => {
    viewPlayerss(initPlayers(PLAYERS));
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }

    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }

    if (sum1 > sum2) {
        hs = parseInt(hs)+1;
        updatescore();
    }
    else{
        vs = parseInt(vs)+1;
        updatescore();
    }

};

var heroScore = document.querySelector("#hero-score");
var vilainScore = document.querySelector("#villain-score");


function updatescore() {

    heroScore.innerText = hs;
    vilainScore.innerText = vs;
    localStorage.setItem('scoreh',hs)
    localStorage.setItem('scorev',vs)

  

}