import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';
import { ButtonStyle, ButtonSize, ButtonShape, ButtonColor } from './button.enum';

@Component({
  selector: 'div[fooButton],span[fooButton],a[fooButton],input[fooButton],button[fooButton]',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  public style: ButtonStyle = ButtonStyle.SOLID;

  @Input()
  public size: ButtonSize = ButtonSize.MEDIUM;

  @Input()
  public shape: ButtonShape = ButtonShape.ROUNDED;

  @Input()
  public color: ButtonColor;

  constructor() {
    this.style = ButtonStyle.SOLID;
    this.size = ButtonSize.MEDIUM;
    this.shape = ButtonShape.ROUNDED;
    this.color = ButtonColor.MAIN;
  }

  @HostBinding('class')
  get classes(): string {
    return `${this.style} ${this.size} ${this.shape} ${this.color}`
  }
}