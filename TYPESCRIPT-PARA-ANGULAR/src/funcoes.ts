// funções

function addNumber (x: number, y: number): number {
    return x + y;
}

function callToPhone(phone: number | string): number | string {
    return phone;
}

let soma: number = addNumber(5, 6);

console.log(callToPhone('11928282828'))

// async

async function getDatabase(id: number): Promise<number | string> {
    return 'tugão';
}
