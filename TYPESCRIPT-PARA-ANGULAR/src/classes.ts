// classes -> forma / molde

/*
    data modifiers
    public -> todos veem
    private -> somente a classe vê
    protected -> classes e subclasses que herdem suas propriedades
*/


// Character -> superclass / pai
class Character {
    protected name?: string
    strength: number
    skill: number

    constructor(name: string, strength: number, skill:number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }
}

// Magician -> subclass / Filha
class Magician extends Character {
    magicPoints: number;

    constructor(
        name: string, 
        strength: number, 
        skill: number, 
        magicPoints: number
    ) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character('Ryu', 10, 98);
const p2 = new Magician('Wizard', 9, 30, 99);