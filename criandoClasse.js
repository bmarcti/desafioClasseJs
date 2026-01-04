class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
this.saborDaMassa = saborDaMassa
this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`delicioso bolo de: ${this.saborDaMassa} com recheio de: ${this.saborRecheio}`)
    }
}
const bolofesta = new formaDeBolo("chocolate ", "nutella ");
const boloPremium = new formaDeBolo("baunilha ", "coco ");

bolofesta.escrever()
boloPremium.escrever()