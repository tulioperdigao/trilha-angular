import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = [];
  menuType:string = 'superUser';

  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'cabo',
      'font'
    ]
  }
  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push('Tugão')
  }

  remover(index:number) {
    this.produtos.splice(index, 1);
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

