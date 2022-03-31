// OOP Exercise

// 1
const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,
    // 1b
    quote: () => `Dishonor! Dishonor on your whole family`,
    storyline: function(){
        return `The movie ${this.title} is about ${this.main}`;
    }
};

// 2
const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    quote: () => `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`,
    storyline: function(){
        return `The movie ${this.title} is about ${this.main}`;
    }
};

// 3a
function DisneyMovie(t, m){
    this.title = t;
    this.main = m;
}
// 3b
DisneyMovie.prototype.storyline = function(){
    return `The movie ${this.title} is about ${this.main}`;
}
// 3c
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`)
console.log(mulan1);
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`)
console.log(tangled1);


// 4a
class DM {
    constructor(t, m) {
        this.title = t;
        this.main = m;
    }
    // 4b
    storyline(){
        return `The movie ${this.title} is about ${this.main}`;
    }
    // 4e
    static loveDisneyMovies(){
        return `I Love Disney Movies!`
    }
}
// 4c
const mulan2 = new DM(`Mulan`, `Fa Mulan`);
// 4d
const tangled2 = new DM(`Tangled`, `Rapunzel`);
// 4f
console.log(DM.loveDisneyMovies());

// 5
class DMCast extends DM {
    constructor(t, m, c) {
        super(t, m);
        this.cast = c;
    }

    static create(a, b, c){
        return new DMCast(a, b, c);
    }
}

const mulan3 = new DMCast(
    `Mulan`, 
    `Fa Mulan`, 
    {
        mulan: `Ming-Na Wen`, 
        mushu: `Eddie Murphy`, 
        shang: `BD Wong`, 
        theEmperor: `Pat Morita`
    }
)
console.log(mulan3);
/* 
DMCast {
    title: 'Mulan',
    main: 'Fa Mulan',
    cast: {
        mulan: 'Ming-Na Wen',
        mushu: 'Eddie Murphy',
        shang: 'BD Wong',
        theEmperor: 'Pat Morita'
    }
}
*/
const tangled3 = new DMCast(
    `Tangled`,
    `Rapunzel`,
    {
        rapunzel: `Mandy Moore`, 
        flynnRider: `Zachary Levi`, 
        motherGothel: `Donna Murphy`
    }
)
console.log(tangled3);
/* 
DMCast {
    title: 'Tangled',
    main: 'Rapunzel',
    cast: {
        rapunzel: 'Mandy Moore',
        flynnRider: 'Zachary Levi',
        motherGothel: 'Donna Murphy'
    }
}
*/

const moana = DMCast.create(
    `Moana`, 
    `Moana of Motunui`, 
    {
        moana: `Auli'i Cravalho`, 
        maui: `Dwayne Johnson`, 
        grammaTala: `Rachel House`, 
        chiefTui: `Temuera Morrison`
    }
)
console.log(moana);
/* 
DMCast {
    title: 'Moana',
    main: 'Moana of Motunui',
    cast: {
        moana: "Auli'i Cravalho",
        maui: 'Dwayne Johnson',
        grammaTala: 'Rachel House',
        chiefTui: 'Temuera Morrison'
    }
}
*/