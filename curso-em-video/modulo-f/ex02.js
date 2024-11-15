function parimp(n) {
    if(n%2 == 0){
        return "par";
    } else {
        return "impar";
    }
}
let res = parimp(8);
console.log(res);

//parâmetros opcionais 

function soma(n1=0, n2=0){
    return n1 + n2;
} 
console.log(soma(9))

// também pode colocar a function dentro de uma variável

let d = function(x) {
    return x*2
}
console.log(d(8))

// calcular fatorial 

function fatorial(n) {
    let fat = 1
    for (let i = n; i > 1; i--) {
        fat *= i
    }
    return fat
}
console.log(fatorial(6))

// calcular fatorial com recursividade

function fatoriall(n){
    if ( n == 1 ) {
        return 1
    } else {
        return n * fatoriall(n-1)
    }
}
console.log(fatoriall(10))