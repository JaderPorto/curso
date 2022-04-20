const imprimirResulTado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('nota invalida')
    }
    console.log('fim')
}
imprimirResulTado(10)
imprimirResulTado(8.9)
imprimirResulTado(6.55)
imprimirResulTado(2.3)
imprimirResulTado(-1)
imprimirResulTado(11)