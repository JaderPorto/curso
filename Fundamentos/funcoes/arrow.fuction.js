function pessoa(){
    
    setInterval(()=>{
this.idade++
console.log(this.idade)
    },1000)
}
new pessoa