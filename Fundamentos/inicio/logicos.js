function compras(trabalh1, trabalh2) {
    const comparSorvete = trabalh1 || trabalh2
    const comprarTv50 = trabalh1 && trabalh2
    //const comprarTv32 = !!(trabalh1 ^ trabalh2) // bitwise xor
    const comprarTv32 = trabalh1 != trabalh2
    const manterSaudavel = !comparSorvete // operador unario
    return {comparSorvete,comprarTv50,comprarTv32,manterSaudavel}
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

