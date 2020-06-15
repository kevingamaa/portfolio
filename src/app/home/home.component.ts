import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Observable, interval, timer, Subscription } from 'rxjs';
import { timeout, debounceTime, delay } from 'rxjs/operators';
export type Matrix = {
    left?: string, 
    numbers?: number[], 
    font_size?: string
};
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
    public height: number = 0;
    public letters: string = '0123456789';
    public matrix: Matrix[] = [];
    public left: boolean;
    public isOn: boolean;
    public seconds: Subscription;
    constructor(
        private dc: ChangeDetectorRef
    ) { }

    ngAfterViewChecked() {
        this.dc.detectChanges()
    }
    ngOnInit() {
        // console.log(this.randomNumbers())
        this.make()
       
    }   

    public fallNumbers() {
        if(!this.isOn) {
            const seconds = interval(100);
            this.seconds = seconds.subscribe(() => {
                this.make();
            })
            this.isOn = true;
        }
    }

    public stopNumbers() {
        if(this.isOn) {
            this.seconds.unsubscribe();
            this.isOn = false;
        }
    }

    public randomNumbers(l = 4) {
        let num: any = Math.random().toLocaleString().substr(-1, l);
        return num;
    }

    public  getLeft() {
        let left = ((this.randomNumbers() * 11) + Math.random() * this.randomNumbers(1));
        if(this.left) {
            left = left - 10;
            this.left = false;
        }
        this.left = true;
        return left + '%';
    }

    public make() {
        let matrix: Matrix = {
            numbers: [1,2,3,4,5,9,5,1,2,3],
            left: this.getLeft()
        };
        let number = this.randomNumbers();
        let idx=  this.matrix.push(matrix) -1;
        let font = Number(String(number) + '0') / 2;
      
        this.matrix[idx].font_size = font + 'px';
        const seconds = interval(100);
        const subs = seconds.subscribe(() => {
            if(this.matrix[idx]) {
                this.matrix[idx].numbers.shift();
                this.matrix[idx].numbers.push(   this.randomNumbers());
            } else {
                subs.unsubscribe();
            }
        });

        const timeout = setTimeout(() => {
            this.matrix.shift();
            clearTimeout(timeout)
        }, 4000);
    }


}

// function cai(nome,top,cx,tfont){
// 	var ct=top;
	
	
// 	var tempo = window.setInterval(function(){
// 		document.getElementById(nome).innerHTML = l[cx];
// 		cx++;
// 		if(cx == l.length){
// 		cx=0;
// 		}
		
	
// 		document.getElementById(nome).style.top=ct+"px";
// 		ct=ct+tfont;
	
// 		if(ct>altura-tfont){	
// 			clearInterval(tempo);

// 			document.body.removeChild(document.getElementById(nome));
// 		}
		
// 	}, 100);
// }

