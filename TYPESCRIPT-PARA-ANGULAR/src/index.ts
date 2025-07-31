/**
 * TIPOS PRIMITIVOS
 * 
 * Boolean, Number, String:
 * 
 */

let ligado: Boolean = true;
let nome: String = 'Tulio';
let idade: Number = 21;

// null
// undefined

let nulo: null = null;
let indefinido: undefined = undefined;


// any
// void

// Exemplo de função que retorna void
let retorno:void;
let retornoView: any = false;


// objeto - sem previsibilidade
let produto: object = {
    name: 'tulio',
    cidade: 'sp',
    idade: 21
}

// objeto - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: 'controle',
    preco: 70,
    unidades: 5
}


// arrays
let dados: string[] = ['tulio', 'kaio', 'daniel'];
let dados2: Array<string> = ['tulio', 'kaio', 'daniel'];

let infos: (string | number)[] = ['tulio', 21, 'kaio', 31];


// tuplas
let boleto: [string, number, number] = ['Conta de Água', 159.90, 909090];