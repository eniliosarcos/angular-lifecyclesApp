import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
    implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

      nombre:string = "Enilio";
      segundos: number = 0;
      timerSubscription!: Subscription;

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.timerSubscription = interval(1000).subscribe( i => {

      this.segundos = i;
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    this.timerSubscription.unsubscribe();

    console.log('timer limpiado');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }


  guardar(){

  }
}
