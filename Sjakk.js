let canvas = document.getElementById("canvas");
canvas.width = canvas.height = 600;
let ctx = canvas.getContext("2d");
let oppNed = prompt("vil du ha de svarte brikkene opp ned? Dette gjør spillet mer praktisk dersom du skal spille mot noen da de vil få brikkene sine 'riktig vei'") 

class Ruter {
    constructor(x, y, bredde, hoyde, farge) {
        this.x = x;
        this.y = y;
        this.bredde = bredde;
        this.hoyde = hoyde;
        this.farge = farge;
    }

    tegnRuter(ctx) {
        ctx.fillStyle = this.farge;
        ctx.fillRect(this.x, this.y, this.bredde, this.hoyde);
    }
}

class Brett {
    constructor(antallRaderV, antallKolonnerH, bredde, hoyde, farge1, farge2) {
        this.antallRaderV = antallRaderV;
        this.antallKolonnerH = antallKolonnerH;
        this.bredde = bredde;
        this.hoyde = hoyde;
        this.ruter = [];
        this.farge1 = farge1;
        this.farge2 = farge2;
    }

    tegn(ctx) {
        let ruteBredde = this.bredde / this.antallKolonnerH;
        let ruteHoyde = this.hoyde / this.antallRaderV;

        for (let i = 0; i < this.antallRaderV; i++) {
            for (let j = 0; j < this.antallKolonnerH; j++) {
                let x = j * ruteBredde; 
                let y = i * ruteHoyde; 
                
                let farge= 0
                if((i+j)%2 == 0){
                     farge= this.farge1

                }
                else{
                     farge = this.farge2
                }

                let rute = new Ruter(x, y, ruteBredde, ruteHoyde, farge);
                this.ruter.push(rute);
                rute.tegnRuter(ctx);
            }
        }
    }
}


//oppNed = prompt("vil du ha de svarte brikkene opp ned? dette gjør det enklere for motspilleren din. hvis ja, skriv 'ja', hvis nei, skriv 'nei'")
    
class Brikker{
    constructor(type, farge, radV, kolonneH){
        this.type = type;
        this.farge = farge;
        this.radV = radV
        this.kolonneH = kolonneH;
        this.brikkerHvit =  []
        this.brikkerSvart = []
        this.posisjonBredde= this.kolonneH*(canvas.width/8)+10
        this.posisjonHoyde= this.radV*(canvas.height/8)+10
        this.selected = false

}
   

tegnBrikke(ctx) {
    let PosisjonBredde = this.kolonneH*(canvas.width/8)
    let PosisjonHoyde = this.radV*(canvas.height/8)
    
if (this.farge == "white") {
    if (this.bilde.complete) {
        ctx.drawImage(this.bilde, PosisjonBredde, PosisjonHoyde, 75, 75);
    } else {
        this.bilde.onload = () => {
            ctx.drawImage(this.bilde, PosisjonBredde, PosisjonHoyde, 75, 75);
        };
    }
} 

else if (this.farge == "black") {
    

    //her kan du velge om du vil ha de svarte brikkene opp ned eller ikke, 
//svarte brikker opp ned
if( oppNed == "ja"|| oppNed =="Ja"){
    if (this.bilde1.complete) {
        // Lagre bildet for å kunne rotere etterpå
        ctx.save();

        ctx.translate(PosisjonBredde + 75 / 2, PosisjonHoyde + 75 / 2);

        ctx.rotate(Math.PI);

        ctx.drawImage(this.bilde1, -75 / 2, -75 / 2, 75, 75);

        ctx.restore();
    } else {
        this.bilde1.onload = () => {
            ctx.save()
            ctx.translate(PosisjonBredde + 75 / 2, PosisjonHoyde + 75 / 2);

            //roter 180 grad
            ctx.rotate(Math.PI);
            ctx.drawImage(this.bilde1, -75 / 2, -75 / 2, 75, 75);
            ctx.restore();
        };
    }
}
else{

    if (this.bilde1.complete) {
        ctx.drawImage(this.bilde1, PosisjonBredde, PosisjonHoyde, 75, 75);
    } else {
        this.bilde1.onload = () => {
            ctx.drawImage(this.bilde1, PosisjonBredde, PosisjonHoyde, 75, 75);
        }
    }
}
}
}
}

class loper extends Brikker{
    constructor(type, farge, radV, kolonneH){
        super("loper", farge, radV, kolonneH, )
        this.bilde = new Image()
        this.bilde.src = "LightBishop.webp"
        this.bilde1 = new Image()
        this.bilde1.src = "DarkBishop.webp"
    }
}

class hest extends Brikker{
    constructor(type, farge, radV, kolonneH){
        super("hest", farge, radV, kolonneH, )
        this.bilde = new Image()
        this.bilde.src = "LightKnight.webp"
        this.bilde1 = new Image()
        this.bilde1.src = "DarkKnight.webp"
    }
    

 
   
    
    }
class taarn extends Brikker{
    constructor(type, farge, radV, kolonneH){
        super("taarn", farge, radV, kolonneH, )
        this.bilde = new Image()
        this.bilde.src = "LightRook.webp"
        this.bilde1 = new Image()
        this.bilde1.src = "DarkRook.webp"
    }
    }

class dronning extends Brikker{
    constructor(type, farge, radV, kolonneH){
        super("dronning", farge, radV, kolonneH, )
        this.bilde = new Image()
        this.bilde.src = "LightQueen.webp"
        this.bilde1 = new Image()
        this.bilde1.src = "DarkQueen.webp"
    }
    }
    


class konge extends Brikker{
    constructor(type, farge, radV, kolonneH){
        super("konge", farge, radV, kolonneH, )
        this.bilde = new Image()
        this.bilde.src = "LightKing.webp"
        this.bilde1 = new Image()
        this.bilde1.src = "DarkKing.webp"
    }
    }
    


class bonde extends Brikker{
    constructor(type, farge, radV, kolonneH){
        super("bonde", farge, radV, kolonneH, )
        this.bilde = new Image()
        this.bilde.src = "LightPawn.webp"
        this.bilde1 = new Image()
        this.bilde1.src = "DarkPawn.webp"
    }
}




let svartKonge = new konge("konge", "black", 0, 4);
let svartDronning = new dronning("dronning", "black", 0, 3);
let svartTaarn1 = new taarn("Taarn", "black", 0, 0);
let svartTaarn2 = new taarn("Taarn", "black", 0, 7);
let svartLoper1 = new loper("loper", "black", 0, 2);
let svartLoper2 = new loper("loper", "black", 0, 5);
let svartHest1 = new hest("hest", "black", 0, 1);
let svartHest2 = new hest("hest", "black", 0, 6);

let svartBonde1 = new bonde("bonde", "black", 1, 0)
let svartBonde2 = new bonde("bonde", "black", 1, 1)
let svartBonde3 = new bonde("bonde", "black", 1,2)
let svartBonde4 = new bonde("bonde", "black", 1, 3)
let svartBonde5 = new bonde("bonde", "black", 1, 4)
let svartBonde6 = new bonde("bonde", "black", 1, 5)
let svartBonde7 = new bonde("bonde", "black", 1, 6)
let svartBonde8 = new bonde("bonde", "black", 1, 7)

    

let hvitKonge = new konge("konge", "white", 7, 4);
let hvitDronning = new dronning("dronning", "white", 7, 3);
let hvitTaarn1 = new taarn("Taarn", "white", 7, 0);
let hvitTaarn2 = new taarn("Taarn", "white", 7, 7);
let hvitLoper1 = new loper("loper", "white", 7, 2);
let hvitLoper2 = new loper("loper", "white", 7, 5);
let hvitHest1 = new hest("hest", "white", 7, 1);
let hvitHest2 = new hest("hest", "white", 7, 6);

let hvitBonde1 = new bonde("bonde", "white", 6, 0)
let hvitBonde2 = new bonde("bonde", "white", 6, 1)
let hvitBonde3 = new bonde("bonde", "white", 6, 2)
let hvitBonde4 = new bonde("bonde", "white", 6, 3)
let hvitBonde5 = new bonde("bonde", "white", 6, 4)
let hvitBonde6 = new bonde("bonde", "white", 6, 5)
let hvitBonde7 = new bonde("bonde", "white", 6, 6)
let hvitBonde8 = new bonde("bonde", "white", 6, 7)

let brett1 = new Brett(8, 8, canvas.width, canvas.height, "white", "#964d22");


let svarteBrikker = [
    svartKonge, svartDronning, 
    svartTaarn1, svartTaarn2,
    svartLoper1, svartLoper2,
    svartHest1, svartHest2,
    svartBonde1, svartBonde2, svartBonde3, svartBonde4, svartBonde5, svartBonde6, svartBonde7, svartBonde8, 
 
]
let hviteBrikker = [
    hvitKonge, hvitDronning, 
    hvitTaarn1, hvitTaarn2, 
    hvitLoper1, hvitLoper2, 
    hvitHest1, hvitHest2,
    hvitBonde1, hvitBonde2, hvitBonde3, hvitBonde4, hvitBonde5, hvitBonde6, hvitBonde7, hvitBonde8,
]

let trekk=0

//lager lister over tidligere koordinater for å sjekke om et trekk er gyldig
let gamleRad=[]
let gamleKolonne=[]
canvas.addEventListener("click", (event) => {

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const alleBrikker = [...svarteBrikker, ...hviteBrikker];
    

    const kolonne = Math.floor(x / (canvas.width / 8));
    const rad = Math.floor(y / (canvas.height / 8));
    gamleRad.push(rad);
    gamleKolonne.push(kolonne);

    //skriv ut koordinatene til trekk
    let koordinatRad = rad+1
    if( koordinatRad==1){
        koordinatRad = 8
    }
    else if( koordinatRad==2){
        koordinatRad = 7
    }
    else if(koordinatRad==3){
        koordinatRad = 6
    }
    else if(koordinatRad==4){
        koordinatRad = 5
    }
    else if(koordinatRad==5){
        koordinatRad = 4
    }
    else if(koordinatRad==6){
        koordinatRad = 3
    }   
    else if(koordinatRad==7){
        koordinatRad = 2
    }
    else if(koordinatRad==8){
        koordinatRad = 1
    }
    let koordinatKolonne = kolonne+1
    if( koordinatKolonne==1){
        koordinatKolonne = "A"
    } 
    else if(koordinatKolonne==2 ){
        koordinatKolonne = "B"
    }
    else if(koordinatKolonne==3 ){
        koordinatKolonne = "C"
    }
    else if(koordinatKolonne==4 ){
        koordinatKolonne = "D"
    }
    else if(koordinatKolonne==5 ){
        koordinatKolonne = "E"
    }
    else if(koordinatKolonne==6 ){
        koordinatKolonne = "F"
    }
    else if(koordinatKolonne==7 ){
        koordinatKolonne = "G"
    }
    else if(koordinatKolonne==8 ){
        koordinatKolonne = "H"
    }

    
    let valgtBrikke = null;

    for (let brikke of alleBrikker) {
        if (brikke.selected) {
            valgtBrikke = brikke;
            valgtBrikke.selected = true;
            brikke.selected = true
            break;
        }
    }

    

    if (valgtBrikke!=null) {
        valgtBrikke.radV = rad;
        valgtBrikke.kolonneH = kolonne;


        //skriv ut info om trekket til konsollen for god oversikt, bruker ikke valgtBrikke.farge i console.log fordi det er på engelsk
        if (valgtBrikke.farge == "white"){
        if(trekk>2){
            
            console.log("trekk", ((trekk-1)/2)+1,": hvit", valgtBrikke.type, "til", koordinatKolonne+koordinatRad )
            }
            else{
                console.log("trekk nr",trekk+": hvit", valgtBrikke.type, "til", koordinatKolonne+koordinatRad) 
            }
        }
        else if(valgtBrikke.farge=="black"){
            if(trekk>2){
            
                console.log("trekk", ((trekk-1)/2)+1,": svart", valgtBrikke.type, "til", koordinatKolonne+koordinatRad )
                }
                else{
                    console.log("trekk nr",trekk+": svart", valgtBrikke.type, "til", koordinatKolonne+koordinatRad) 
                }

        }
            

        //Sjekk om et trekk er lovlig BONDE
        
        if(valgtBrikke.type=="bonde"){
            if(valgtBrikke.farge=="black"){
                if(valgtBrikke.radV==gamleRad[trekk-1] && gamleKolonne[trekk-1] !== valgtBrikke.kolonneH ){
                    console.log("ulovlig trekk")
                    return
                }
                if(valgtBrikke.kolonneH==gamleKolonne[trekk-1]+1){
                    if(valgtBrikke.radV==gamleRad[trekk-1]+1){
                        let tatt=false
                        for(let i = 0; i<hviteBrikker.length; i++) {
                            if(valgtBrikke.kolonneH==hviteBrikker[i].kolonneH){
                                if(valgtBrikke.radV==hviteBrikker[i].radV){
                                    console.log("lovlig trekk")
                                    //hviteBrikker.splice(i,1)
                                    tatt=true

                                    
                            }}
                        }
                        if( tatt== false ){
                            console.log("Ulovlig trekk")
                            return
                        }

                    }
                    else{
                        console.log("Ulovlig trekk, kan ikke gå sånn til siden")
                        return
                    }
                }
                else if(valgtBrikke.kolonneH==gamleKolonne[trekk-1]-1){
                    if(valgtBrikke.radV==gamleRad[trekk-1]+1){
                        let tatt=false
                            for(let i = 0; i<hviteBrikker.length; i++) {
                                if(valgtBrikke.kolonneH==hviteBrikker[i].kolonneH){
                                    if(valgtBrikke.radV==hviteBrikker[i].radV){
                                        console.log("lovlig trekk")
                                        //hviteBrikker.splice(i,1)
                                        tatt=true
                                        
                                        
                                }}
                            }
                            if( tatt== false ){
                                console.log("ulovlig trekk")
                                return
                            }

                    }
                    else{
                        console.log("Ulovlig trekk, kan ikke gå til siden")
                        return
                    }
                }
                

                else if(valgtBrikke.radV==gamleRad[trekk-1]+1 && valgtBrikke.kolonneH==gamleKolonne[trekk-1]){
                    let trefferBrikke = false
                    for(let i=0; i<alleBrikker.length; i++){
                        if (valgtBrikke.radV == alleBrikker[i].radV && valgtBrikke.kolonneH == alleBrikker[i].kolonneH){
                            if(valgtBrikke!==alleBrikker[i]){
                            console.log("Ulovlig trekk, treffer", alleBrikker[i])
                            trefferBrikke = true
                            return
                            }
                            
                            
                        }
                    }
                    if(trefferBrikke==false){
                        console.log("lovlig trekk1")
                        
                        
                    }
                    
                }
                
                else if(valgtBrikke.kolonneH !== gamleKolonne[trekk-1]){
                    console.log("Ulovlig trekk, hvit brikken kan ikke gå sånn til siden ")
                    return
                }
                else if(gamleRad[trekk-1]==1){
                    if(valgtBrikke.radV==gamleRad[trekk-1]+2 && valgtBrikke.kolonneH==gamleKolonne[trekk-1]){

                        let trefferBrikke = false
                    for(let i=0; i<alleBrikker.length; i++){
                        if (valgtBrikke.radV == alleBrikker[i].radV && valgtBrikke.kolonneH == alleBrikker[i].kolonneH){
                            if(valgtBrikke!==alleBrikker[i]){
                            console.log("Ulovlig trekk, treffer brikken:", alleBrikker[i].type)
                            trefferBrikke = true
                            return
                            }
                            
                            
                        }
                        if(valgtBrikke.radV-1 == alleBrikker[i].radV && valgtBrikke.kolonneH == alleBrikker[i].kolonneH){
                            console.log("Ulovlig trekk, kan ikke gå gjennom", alleBrikker[i].type+"en")
                            trefferBrikke = true
                            return
                        }
                    }
                    if(trefferBrikke==false){
                        console.log("Lovlig trekk")
                        
                    }
                        

                    
                    }
                    else{
                        console.log("Ulovlig trekk, hvit brikken kan ikke gå mer enn to fremover da eller til siden")
                        return
                    }
                    
                    
                }
                else{
                    console.log("Ulovlig trekk ")
                    return
                }
               
                
            }
        else if(valgtBrikke.farge=="white"){
            if(valgtBrikke.kolonneH==gamleKolonne[trekk-1]+1){
                let tatt=false
                for(let i = 0; i<svarteBrikker.length; i++) {
                    if(valgtBrikke.kolonneH==svarteBrikker[i].kolonneH){
                        if(valgtBrikke.radV==svarteBrikker[i].radV){
                            console.log("lovlig trekk")
                            //svarteBrikker.splice(i,1)
                            tatt=true
                                        
                        }
                    }
                }
                if( tatt== false ){
                    console.log("Ulovlig trekk, bonden kan ikke gå på skrå uten å ta noe")
                    return
                }
                
                else if(valgtBrikke.radV+1 !== gamleRad[trekk-1]){
                    console.log("ulovlig trekk, bonden kan ikke gå på skrå slik")
                    return
                }
                

            }
            else if(valgtBrikke.kolonneH==gamleKolonne[trekk-1]-1){
                let tatt=false
                for(let i = 0; i<svarteBrikker.length; i++) {
                    if(valgtBrikke.kolonneH==svarteBrikker[i].kolonneH){
                        if(valgtBrikke.radV==svarteBrikker[i].radV){
                            console.log("lovlig trekk")
                            //hviteBrikker.splice(i,1)
                            tatt=true
                            
                    }}
                }
                if( tatt== false ){
                    console.log("Ulovlig trekk, bonden kan ikke gå på skrå")
                    return
                }
                
                else if(valgtBrikke.radV+1 !== gamleRad[trekk-1]){
                    console.log("ulovlig trekk, bonden kan ikke gå på skrå slik")
                    return
                }

            }   
            else if(valgtBrikke.radV==gamleRad[trekk-1]-1 && valgtBrikke.kolonneH==gamleKolonne[trekk-1])
                {
                    let trefferBrikke = false
                    for(let i=0; i<alleBrikker.length; i++){
                        if (valgtBrikke.radV == alleBrikker[i].radV && valgtBrikke.kolonneH == alleBrikker[i].kolonneH){
                            if(valgtBrikke!==alleBrikker[i]){
                            console.log("Ulovlig trekk, treffer", alleBrikker[i])
                            trefferBrikke = true
                            return
                            }
                            
                            
                        }
                    }
                    if(trefferBrikke==false){
                        console.log("Lovlig trekk")
                        
                    }
                }
                
            else if(gamleRad[trekk-1]==6){
                    if(valgtBrikke.radV==gamleRad[trekk-1]-2 && valgtBrikke.kolonneH==gamleKolonne[trekk-1]){

                        let trefferBrikke = false
                    for(let i=0; i<alleBrikker.length; i++){
                        if (valgtBrikke.radV == alleBrikker[i].radV && valgtBrikke.kolonneH == alleBrikker[i].kolonneH){
                            if(valgtBrikke!==alleBrikker[i]){
                            console.log("Ulovlig trekk, treffer en brikke", alleBrikker[i])
                            trefferBrikke = true
                            return
                            }
                            
                            
                        }
                        if(valgtBrikke.radV+1 == alleBrikker[i].radV && valgtBrikke.kolonneH == alleBrikker[i].kolonneH){
                            console.log("Ulovlig trekk")
                            trefferBrikke = true
                            return
                        }
                        
                    }
                    if(trefferBrikke==false){
                        console.log("Lovlig trekk")
                        
                    }
                        

                    
                    }
                    else{
                        console.log("Ulovlig trekk, hvit brikken kan ikke gå mer enn to fremover da eller til siden")
                        return
                    }
                    
                    
                }
                
            else{
                    console.log("Ulovlig trekk")
                    return
                }
                



                
        }   
        }
       
        else if(valgtBrikke.type == "taarn"){

        }

        //Sjekk om et trekk er lovlig HEST
        if(valgtBrikke.type == "hest"){
                let kanskjelovlig=false
                //To bak en til venstre for hvit
                if(valgtBrikke.radV == gamleRad[trekk-1]+2 && valgtBrikke.kolonneH == gamleKolonne[trekk-1]-1){
                    kanskjelovlig = true
                }
                  
                //To bak en til høyre for hvit
                else if(valgtBrikke.radV == gamleRad[trekk-1]+2 && valgtBrikke.kolonneH == gamleKolonne[trekk-1]+1){
                    kanskjelovlig = true
                }
                
                //To frem en til venstre for hvit
                else if(valgtBrikke.radV == gamleRad[trekk-1]-2 && valgtBrikke.kolonneH == gamleKolonne[trekk-1]-1){
                    kanskjelovlig = true
                }
                
                //To frem en til høyre for hvit
                else if(valgtBrikke.radV == gamleRad[trekk-1]-2 && valgtBrikke.kolonneH == gamleKolonne[trekk-1]+1){
                    kanskjelovlig = true
                }
                
                //To til høyre for hvit, en bak
                else if(valgtBrikke.radV == gamleRad[trekk-1]+1 && valgtBrikke.kolonneH == gamleKolonne[trekk-1]+2){
                    kanskjelovlig = true
                }
                
                //To til venstre for hvit, en bak
                else if(valgtBrikke.radV == gamleRad[trekk-1]+1 && valgtBrikke.kolonneH == gamleKolonne[trekk-1]-2){
                    kanskjelovlig = true
                }

                //To til høyre for hvit, en frem
                else if(valgtBrikke.radV == gamleRad[trekk-1]-1 && valgtBrikke.kolonneH == gamleKolonne[trekk-1]+2){
                    kanskjelovlig = true
                }


                //To til venstre for hvit, en frem
                else if(valgtBrikke.radV == gamleRad[trekk-1]-1 && valgtBrikke.kolonneH == gamleKolonne[trekk-1]-2){
                    kanskjelovlig = true
                }

                else{
                    console.log("Ulovlig trekk")
                    return
                }

                //sjekk om hesten treffer en brikke, først for hvit så for svart
                if( kanskjelovlig == true){
                    if(valgtBrikke.farge=="white"){
                    for(let i=0; i<hviteBrikker.length; i++){
                        if(valgtBrikke.radV == hviteBrikker[i].radV && valgtBrikke.kolonneH == hviteBrikker[i].kolonneH){
                            if(valgtBrikke!==hviteBrikker[i]){
                                console.log("Ulovlig trekk, hesten treffer sin egen brikke")
                                kanskjelovlig = false
                                return
                            }
                        }


                    }
                }
                   else if(valgtBrikke.farge=="black"){
                    for( let i=0; i<svarteBrikker.length; i++){
                        if(valgtBrikke.radV == svarteBrikker[i].radV && valgtBrikke.kolonneH == svarteBrikker[i].kolonneH){
                            if(valgtBrikke!==svarteBrikker[i]){
                                console.log("Ulovlig trekk, hesten treffer sin egen brikke")
                                kanskjelovlig = false
                                return
                            }
                        }
                    }
                   }

                   if(kanskjelovlig == true){
                    console.log("Lovlig trekk")
                   
                }

                else{
                    console.log("Ulovlig trekk, hesten kan ikke gå i dette mønsteret")
                    return
                }

            }
        }

        //Sjekk om et trekk er gyldig tårn
        else if(valgtBrikke.type == "taarn"){

            function sjekkSluttposisjon() {
                // Sjekk om sluttposisjonen treffer en brikke av samme farge, isåfall ulovlig
                for (let i = 0; i < alleBrikker.length; i++) {
                    if (
                        valgtBrikke.radV == alleBrikker[i].radV &&
                        valgtBrikke.kolonneH == alleBrikker[i].kolonneH &&
                        valgtBrikke.farge == alleBrikker[i].farge &&
                        valgtBrikke !== alleBrikker[i]
                    ) {
                        console.log("Ulovlig trekk, tårnet treffer sin egen brikke")
                        return true
                    }
                }
                
                console.log("Lovlig trekk") 
                return false
                
            
               
            }

            //dette viser at tårnet har flyttet seg mot venstre
            if (valgtBrikke.kolonneH < gamleKolonne[trekk - 1]) {
             
            
                let ulovlig = false;
            
                // sejkker over  alle kolonnene mot venstre om den har gått gjennom en annen brike, sjekker ikke for siste rute, da den kan lande på en av motsatt farge og ta brikken.
                for (let kol = valgtBrikke.kolonneH + 1; kol < gamleKolonne[trekk - 1]; kol++) {
                    for (let j = 0; j < alleBrikker.length; j++) {
                        if (alleBrikker[j].kolonneH == kol && alleBrikker[j].radV == valgtBrikke.radV) {
                            console.log("Brikken går gjennom en annen, ulovlig");
                            ulovlig = true;
                            return;
                        }
                    }
                }
            
                if(sjekkSluttposisjon()==true){
                    return
                }
            }
            //dette viser at det går mot høyre
            else if (valgtBrikke.kolonneH > gamleKolonne[trekk - 1]) {
                
            
                let ulovlig = false;
            
                // sjekker for alle kkolonnene mot høyre frem til tårnet om den har gått hjennom en brikke 
                for (let kol = gamleKolonne[trekk - 1] + 1; kol < valgtBrikke.kolonneH; kol++) {
                    for (let j = 0; j < alleBrikker.length; j++) {
                        if (alleBrikker[j].kolonneH === kol && alleBrikker[j].radV === valgtBrikke.radV) {
                            console.log("Brikken går gjennom en annen, ulovlig")
                            ulovlig = true
                            return
                        }
                    }
                }
            
                if(sjekkSluttposisjon()==true){
                    return
                }
            } 
            //tårnet har flyttet seg nedovr
            else if (valgtBrikke.radV > gamleRad[trekk - 1]) {
            
                let ulovlig = false;
            
                // sjekk alle radene nedover frem til der tårnet er
                for (let rad = gamleRad[trekk - 1] + 1; rad < valgtBrikke.radV; rad++) {
                    for (let j = 0; j < alleBrikker.length; j++) {
                        if (alleBrikker[j].radV === rad && alleBrikker[j].kolonneH === valgtBrikke.kolonneH) {
                            console.log("Brikken går gjennom en annen, ulovlig")
                            ulovlig = true
                            return
                        }
                    }
                }
            
                if(sjekkSluttposisjon()==true){
                    return
                }
            } 
            //tårnet har flyttet seg oppover
            else if (valgtBrikke.radV < gamleRad[trekk - 1]) {
                
            
                let ulovlig = false
            
                // Sjekk alle radene oppover frem til tårnet
                for (let rad = valgtBrikke.radV + 1; rad < gamleRad[trekk - 1]; rad++) {
                    for (let j = 0; j < alleBrikker.length; j++) {
                        if (alleBrikker[j].radV === rad && alleBrikker[j].kolonneH === valgtBrikke.kolonneH) {
                            console.log("Brikken går gjennom en annen, ulovlig")
                            ulovlig = true
                            return
                        }
                    }
                }
            
                if(sjekkSluttposisjon()==true){
                    return
                }
            }
            
            
          

        }
        else if(valgtBrikke.type == "loper"){
            function sjekkSluttposisjon() {
                // Sjekk om sluttposisjonen treffer en brikke av samme farge, isåfall ulovlig
                for (let i = 0; i < alleBrikker.length; i++) {
                    if (
                        valgtBrikke.radV == alleBrikker[i].radV &&
                        valgtBrikke.kolonneH == alleBrikker[i].kolonneH &&
                        valgtBrikke.farge == alleBrikker[i].farge &&
                        valgtBrikke !== alleBrikker[i]
                    ) {
                        console.log("Ulovlig trekk, tårnet treffer sin egen brikke")
                        return true
                    }
                }
                
                console.log("Lovlig trekk") 
                return false
                
            
               
            }
            

            if(valgtBrikke.radV == gamleRad[trekk-1]){
                console.log("ulovlig trekk")
                return
            }
            if(valgtBrikke.kolonneH == gamleKolonne[trekk-1]){
                console.log("ulovlig trekk")
                return
            }
            let endringX = valgtBrikke.kolonneH- gamleKolonne[trekk-1]
            let endringY = valgtBrikke.radV - gamleRad[trekk-1]
            let kanskjelovlig = false

            if(Math.abs(endringX) == Math.abs(endringY)){
                kanskjelovlig = true
                
            }
            else{
                console.log("Ulovlig trekk")
                return
            }

            if(kanskjelovlig==true){
                //Sjekk gjennom alle feltene løpern har bevegd seg på

            let dx = endringX > 0 ? 1 : -1; // for å finne retning på x aksen, her måtte jeg spørre AI
            let dy = endringY > 0 ? 1 : -1; // for å finne ut retningen på y aksen, her også

            let x = gamleKolonne[trekk - 1]; //hvor brikken startet
            let y = gamleRad[trekk - 1]; //hvo brikken startet

    while ((x += dx) !== valgtBrikke.kolonneH && (y += dy) !== valgtBrikke.radV) {
        for (let i = 0; i < alleBrikker.length; i++) {
            if (alleBrikker[i].kolonneH === x && alleBrikker[i].radV === y) {
                console.log("Ulovlig trekk, løperen er blokkert")
                return
            }
        }
    }

    // sejkk sluttposisjonen
    if (sjekkSluttposisjon()==true){
        return;
    }
    else{

    } 


}


        } 
        else if (valgtBrikke.type == "dronning") {
            function sjekkSluttposisjon() {
                // Sjekk om sluttposisjonen treffer en brikke av samme farge, da er det ulovlig
                for (let i = 0; i < alleBrikker.length; i++) {
                    if (
                        valgtBrikke.radV == alleBrikker[i].radV &&
                        valgtBrikke.kolonneH == alleBrikker[i].kolonneH &&
                        valgtBrikke.farge == alleBrikker[i].farge &&
                        valgtBrikke !== alleBrikker[i]
                    ) {
                        console.log("Ulovlig trekk, dronningen treffer sin egen brikke");
                        return true;
                    }
                }
                console.log("Lovlig trekk");
                return false;
            }
        
            let endringX = valgtBrikke.kolonneH - gamleKolonne[trekk - 1];
            let endringY = valgtBrikke.radV - gamleRad[trekk - 1];
        
            if (valgtBrikke.radV === gamleRad[trekk - 1] || valgtBrikke.kolonneH === gamleKolonne[trekk - 1]) {
                // Bevegelse som tårn, henter koden dra istad
                if (valgtBrikke.kolonneH < gamleKolonne[trekk - 1]) {
                    // Mot venstre
                    for (let kol = valgtBrikke.kolonneH + 1; kol < gamleKolonne[trekk - 1]; kol++) {
                        for (let j = 0; j < alleBrikker.length; j++) {
                            if (alleBrikker[j].kolonneH == kol && alleBrikker[j].radV == valgtBrikke.radV) {
                                console.log("Brikken går gjennom en annen, ulovlig");
                                return;
                            }
                        }
                    }
                    if (sjekkSluttposisjon()) return;
                } else if (valgtBrikke.kolonneH > gamleKolonne[trekk - 1]) {
                    // Mot høyre
                    for (let kol = gamleKolonne[trekk - 1] + 1; kol < valgtBrikke.kolonneH; kol++) {
                        for (let j = 0; j < alleBrikker.length; j++) {
                            if (alleBrikker[j].kolonneH === kol && alleBrikker[j].radV === valgtBrikke.radV) {
                                console.log("Brikken går gjennom en annen, ulovlig");
                                return;
                            }
                        }
                    }
                    if (sjekkSluttposisjon()) return;
                } else if (valgtBrikke.radV > gamleRad[trekk - 1]) {
                    // Ned
                    for (let rad = gamleRad[trekk - 1] + 1; rad < valgtBrikke.radV; rad++) {
                        for (let j = 0; j < alleBrikker.length; j++) {
                            if (alleBrikker[j].radV === rad && alleBrikker[j].kolonneH === valgtBrikke.kolonneH) {
                                console.log("Brikken går gjennom en annen, ulovlig")
                                return
                            }
                        }
                    }
                    if (sjekkSluttposisjon()){
                        return
                    }
                } else if (valgtBrikke.radV < gamleRad[trekk - 1]) {
                    //opp
                    for (let rad = valgtBrikke.radV + 1; rad < gamleRad[trekk - 1]; rad++) {
                        for (let j = 0; j < alleBrikker.length; j++) {
                            if (alleBrikker[j].radV === rad && alleBrikker[j].kolonneH === valgtBrikke.kolonneH) {
                                console.log("Brikken går gjennom en annen, ulovlig")
                                return
                            }
                        }
                    }
                    if (sjekkSluttposisjon()){
                        return
                    }
                }
            } 
            //henter koden fra når en brikke beveger seg på skrå(løperen)
            else if (Math.abs(endringX) === Math.abs(endringY)) {
                //
                let dx = endringX > 0 ? 1 : -1;
                let dy = endringY > 0 ? 1 : -1;
        
                let x = gamleKolonne[trekk - 1];
                let y = gamleRad[trekk - 1];
        
                while ((x += dx) !== valgtBrikke.kolonneH && (y += dy) !== valgtBrikke.radV) {
                    for (let i = 0; i < alleBrikker.length; i++) {
                        if (alleBrikker[i].kolonneH === x && alleBrikker[i].radV === y) {
                            console.log("Ulovlig trekk, dronningen er blokkert");
                            return;
                        }
                    }
                }
                if (sjekkSluttposisjon()){
                    return
                } 
            } 
            else {
                console.log("Ulovlig trekk, dronningen må bevege seg diagonalt eller rett");
                return;
            } 
        }
        
        else if(valgtBrikke.type == "konge"){
            function sjekkSluttposisjon() {
                // Sjekk om sluttposisjonen treffer en brikke av samme farge, isåfall ulovlig
                for (let i = 0; i < alleBrikker.length; i++) {
                    if (
                        valgtBrikke.radV == alleBrikker[i].radV &&
                        valgtBrikke.kolonneH == alleBrikker[i].kolonneH &&
                        valgtBrikke.farge == alleBrikker[i].farge &&
                        valgtBrikke !== alleBrikker[i]
                    ) {
                        console.log("Ulovlig trekk, tårnet treffer sin egen brikke")
                        return true
                    }
                }
                
                console.log("Lovlig trekk") 
                return false
                
            
               
            }
            
          let kanskjelovlig=false
          //definer alle retningene kongen kan bevege seg
          
          if(valgtBrikke.radV == gamleRad[trekk-1] && gamleKolonne[trekk-1]+1==valgtBrikke.kolonneH){
              kanskjelovlig = true
          }

          else if(valgtBrikke.radV == gamleRad[trekk-1] && gamleKolonne[trekk-1]-1==valgtBrikke.kolonneH){
              kanskjelovlig = true
          }

          else if(valgtBrikke.radV+1 == gamleRad[trekk-1] && gamleKolonne[trekk-1]+1==valgtBrikke.kolonneH){
              kanskjelovlig = true
          }

          else if(valgtBrikke.radV-1 == gamleRad[trekk-1] && gamleKolonne[trekk-1]+1==valgtBrikke.kolonneH){
              kanskjelovlig = true

          }

          else if(valgtBrikke.radV+1 == gamleRad[trekk-1] && gamleKolonne[trekk-1]-1==valgtBrikke.kolonneH){
              kanskjelovlig = true
          }

          else if(valgtBrikke.radV-1 == gamleRad[trekk-1] && gamleKolonne[trekk-1]-1==valgtBrikke.kolonneH){
              kanskjelovlig = true
          }

          else if(valgtBrikke.radV+1 == gamleRad[trekk-1] && gamleKolonne[trekk-1]==valgtBrikke.kolonneH){
              kanskjelovlig = true
          }

          else if(valgtBrikke.radV-1 == gamleRad[trekk-1] && gamleKolonne[trekk-1]==valgtBrikke.kolonneH){
              kanskjelovlig = true
          }

          else{
              console.log("Ulovlig trekk!")
              return
          }


          //sjekk om det er en brikke det kongen har gått

          if( kanskjelovlig == true){
              if(sjekkSluttposisjon()==true){
                  return
              }
          }

          else{
              console.log("Lovlig trekk!")
              return
          }



        }

        



    




        //Sjekk om en brikke har blitt tatt
        if (valgtBrikke.farge == "white"){
            for(let i = 0; i<svarteBrikker.length; i++) {
                if(valgtBrikke.kolonneH==svarteBrikker[i].kolonneH){
                    if(valgtBrikke.radV==svarteBrikker[i].radV){
                        svarteBrikker.splice(i,1)
                }}
            }
        }
        else if (valgtBrikke.farge == "black"){
        for(let i = 0; i<hviteBrikker.length; i++) {
            if(valgtBrikke.kolonneH==hviteBrikker[i].kolonneH){
                if(valgtBrikke.radV==hviteBrikker[i].radV){
                    hviteBrikker.splice(i,1)
                    console.log(hviteBrikker[i])
            }}
        }
    }
   
        valgtBrikke.selected = false
        oppdaterBrett()
    } 
    
    else {
        for (let brikke of alleBrikker) {
            if (brikke.radV == rad && brikke.kolonneH == kolonne) {
                brikke.selected = true;
                //markerer den valgte brikken med funksjonen markerBrikke()
                markerBrikke()
                break;
            }
        }
    }
    trekk++
    
});

function oppdaterBrett() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    brett1.tegn(ctx);

    for(let i = 0; i < svarteBrikker.length; i++) {
        svarteBrikker[i].tegnBrikke(ctx)
    }
    for(let i = 0; i < hviteBrikker.length; i++) {
        hviteBrikker[i].tegnBrikke(ctx)
    }
    console.log("----------------")
    
}
function markerBrikke(){
    for (let brikke of [...svarteBrikker, ...hviteBrikker]) {
        if (brikke.selected) {
            ctx.strokeStyle = "yellow"; 
            ctx.lineWidth = 5;
            let markerX = brikke.kolonneH * (canvas.width / 8);
            let markerY = brikke.radV * (canvas.height / 8);
            ctx.strokeRect(markerX + 2, markerY + 2, (canvas.width / 8) - 4, (canvas.height / 8) - 4); 
        }
    }

}



//starter spillet med å tegne brettet og brikkene, og kalle på "oppdater brett til når en brikke flyttes på"
brett1.tegn(ctx)

for(let i = 0; i < svarteBrikker.length; i++) {
    svarteBrikker[i].tegnBrikke(ctx)
}

for(let i = 0; i < hviteBrikker.length; i++) {
    hviteBrikker[i].tegnBrikke(ctx)
}

oppdaterBrett()