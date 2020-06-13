import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('matrix') public matrix: ElementRef;
    public height: number = 0;
    constructor() { }

    ngOnInit() {
        console.log(this.randomNumbers())

    }


    public randomNumbers() {
        let num: any = Math.random().toLocaleString().substr(-1, 2);
        num = Math.random() * num;
        return parseInt(num);
    }

    public make() {
        if (this.height == 0) {
            this.height = 100;
        }
        let tfont = this.randomNumbers();
        let left = this.randomNumbers() * 10;
        let c: number;
        for (let index = 0; index < 1; index++) {
            c++;
            let top = index * tfont;
            let n = `c${c+index}`;
            let divTag = document.createElement('div');
            if(index == 0) {
                divTag.style.fontSize = tfont+"px";
                divTag.style.top=top+"px";
                divTag.style.left=left+"px";
                divTag.className = "matrix-letters";
                divTag.id = n;
            }
        }
    }

}

// function aleatorio(menor, maior) {
//   numPossibilidades = maior - menor;
//   aleat = Math.random() * numPossibilidades;
//   aleat = Math.floor(aleat);
//   return parseInt(menor) + aleat;
// }

// var c = 0;
// texto = "0123456789";
// //texto = prompt ("Texto");
// var l = texto.split("");


// function cria() {
//   if (altura == 0) {
//     altura = 300;
//   }
//   var tfont = aleatorio(10, 30);
//   var left = aleatorio(0, largura - tfont);

//   for (contp = 0; contp < l.length; contp++) {
//     c++;
//     var top = -contp * tfont;
//     var n = "c" + c + contp;
//     var divTag = document.createElement("div");
//     if (contp == 0) { divTag.style.color = "#FFF" }
//     divTag.style.fontSize = tfont + "px";
//     divTag.style.top = top + "px";
//     divTag.style.left = left + "px";
//     divTag.className = "letra";
//     divTag.id = n;

//     document.body.appendChild(divTag);

//     cai(n, top, contp, tfont);
//   }
// }




// function cai(nome, top, cx, tfont) {
//   var ct = top;


//   var tempo = window.setInterval(function () {
//     document.getElementById(nome).innerHTML = l[cx];
//     cx++;
//     if (cx == l.length) {
//       cx = 0;
//     }


//     document.getElementById(nome).style.top = ct + "px";
//     ct = ct + tfont;

//     if (ct > altura - tfont) {
//       clearInterval(tempo);

//       document.body.removeChild(document.getElementById(nome));
//     }

//   }, 100);
// }


// window.setInterval(function () { cria() }, 100);
