import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item: any = '';

  @Input() iconsBasePath: string = '';

  public alert() {
    alert(123);
  }
}
