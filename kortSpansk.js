let canvas = document.getElementById("index");
let ctx = canvas.getContext("2d");
class Rektangel {
    constructor(startX, startY, bredde, hoyde, hastighet, farge) {
        this.x = startX;
        this.y = startY;
        this.bredde = bredde;
        this.hoyde = hoyde;
        this.hastighet = hastighet;
        this.farge = farge;
        this.bilde = new Image();
        this.bilde.src = "snøbilde.webp";
        this.bildeLastet = false;

        this.bilde.onload = () => {
            this.bildeLastet = true;
        };
    }

    tegn(ctx) {
        if (this.bildeLastet) {
            ctx.drawImage(this.bilde, this.x, this.y, this.bredde, this.hoyde);
        } else {
            ctx.fillStyle = this.farge;
            ctx.fillRect(this.x, this.y, this.bredde, this.hoyde);
        }
    }

    oppdaterPosisjon() {
        this.y += this.hastighet;
        if (this.y > canvas.height) {
            this.y = -this.hoyde;
        }
    }
}


class Gaver {
    constructor() {
        this.rektangeler = []
    }

    lagRektangler(antall) {
        for (let i = 0; i < antall; i++) {
            let startX = Math.random() * canvas.width;
            let startY = Math.random() * canvas.height;
            let bredde = 50 + Math.random() * 100;
            let hoyde = 50 + Math.random() * 70;
            let hastighet = 2 + Math.random() * 5;
            this.rektangeler.push(new Rektangel(startX, startY, bredde, hoyde, hastighet,));
        }
    }

    tegn(ctx) {
        for (let i=0; i<this.rektangeler.length; i++) {
            this.rektangeler[i].tegn(ctx)
        }
    }

    oppdaterPosisjon(ctx) {
        for (let i=0; i<this.rektangeler.length; i++) {
            this.rektangeler[i].oppdaterPosisjon(ctx)
        }
    }
}

function animasjon() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //ctx.fillStyle = "green"
    //ctx.fillRect(0, 0, canvas.width, canvas.height)
    gaver.oppdaterPosisjon()
    gaver.tegn(ctx)
    requestAnimationFrame(animasjon)
}


let gaver = new Gaver()
gaver.lagRektangler(20)
animasjon()
