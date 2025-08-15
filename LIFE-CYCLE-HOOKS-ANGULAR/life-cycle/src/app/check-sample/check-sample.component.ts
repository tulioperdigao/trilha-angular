import {
  Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit {

  quantidade:number = 0;

  constructor() { }

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

  // checked -> content -> view

  // Depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  // Após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  // Após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngDoCheck(): void {
      console.log('ngDoCheck')
  }

  ngOnInit(): void {
    console.log('ngDoInit')
  }

}
