import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'book-card',
  template: `
  <div>
    <img src="{{IsPintasSad()}}" alt="pintas" width="100" height="120">
    <p>{{title}}</p>
  </div>
  `,
  styleUrls: ['./book_card.component.css'],
})
export class BookCardComponent {
  title = 'O pintas aprende as cores';
  image = 'https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D';
  imageSad = 'https://bettervet.com/hs-fs/hubfs/sad-and-depressed-dog-with-tears.jpg?width=734&height=413&name=sad-and-depressed-dog-with-tears.jpg'
  @Input() pDSad:Boolean = false;


  IsPintasSad() {
    console.log("1");
    if(this.pDSad){
      return this.imageSad
    }else{
      return this.image
    }
  }
}

