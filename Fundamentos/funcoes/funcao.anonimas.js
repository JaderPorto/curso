const soma = function (x,y){
return x + y
}
const imPrimaResultado = function (a,b, operacao = soma) {
    console.log(operacao(a,b))
}
imPrimaResultado(3, 4)
imPrimaResultado(3, 4, soma)
imPrimaResultado(3, 4,function(x,y){
    return x -y
})
imPrimaResultado(3, 4,(x,y)=> x*y)
const pessoa = {
    falar(){
        console.log('Opa')
    }
}
pessoa.falar()