// classes -> forma / molde
class Character {
    name: string
    strength: number
    skill: number

    constructor(name: string, strength: number, skill:number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`)
    }
}

const p1 = new Character('Ryu', 10, 98);
p1.attack();