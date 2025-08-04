// interfaces (type x interface)

// type -> tipar uma variável específica - objetos

type robot = {
    readonly id: number | string;
    name: string;
}

const robot: robot = {
    id: 1,
    name: 'megaman'
};

// interfaces -> Mais usados com classes - contrato

interface robot2 {
    readonly id: number | string;
    name: string;
    sayhello(): string;
};

const bot: robot2 = {
    id: 2,
    name: 'tugao',
    sayhello: function (): string {
        throw new Error("Function not implemented.");
    }
}

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor (id: string | number, name: string) {
        this.id = id;
        this.name = name
    }
    sayhello(): string {
        return `Hello, I am ${this.name}`;
    }
    
}

const p = new Pessoa(1, 'Gutsman');
console.log(p.sayhello());