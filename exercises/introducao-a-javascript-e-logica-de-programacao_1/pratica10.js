let custo = 1;
let imposto = custo * 0.2
let venda = 4;
let lucro;

if (custo >= 0 && venda >= 0){
    lucro = (venda - (custo - imposto)) * 1000;
    console.log(lucro);   
}
else {
    console.log('Erro');
}

