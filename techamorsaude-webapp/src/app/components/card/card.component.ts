import { Component, EventEmitter, Input } from '@angular/core';

import { CardButton } from 'src/app/Interfaces/ICardButton';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() handlePrimaryButton!: CardButton;

  primaryButtonClick(): void {
    if (this.handlePrimaryButton.action) this.handlePrimaryButton.action();
  }
}
