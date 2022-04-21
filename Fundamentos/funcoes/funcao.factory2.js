function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
} 
 console.log(criarProduto('Notebook',2199.44))
 console.log(criarProduto('Ipad',1199.44))
 //console.log(criarProduto('Notebook',2199.44))