class jogador{
    constructor(nome,posicao,numGols){
        this.nome=nome,
        this.posicao=posicao,
        this.numGols=numGols
    }
    golsMarcados(){
        console.log(`o ${this.nome} Já marcou ${this.numGols} gols em sua carreira`)
    }
}

const Neymar=new jogador("Neymar","Atacante",400)

console.log(Neymar)
Neymar.golsMarcados()

const Pele=new jogador("Pele","Atacante",1000)

Pele.golsMarcados()