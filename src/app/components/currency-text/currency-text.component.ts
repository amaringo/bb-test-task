import {Component, Input, OnInit} from '@angular/core';
import {CurrencyAmount} from '../../contracts/contracts';

@Component({
  selector: 'app-currency-text',
  templateUrl: './currency-text.component.html',
  styleUrls: ['./currency-text.component.scss']
})
export class CurrencyTextComponent implements OnInit {

  @Input()
  public amountData?: CurrencyAmount | null = null;

  @Input()
  public minIntegerDigits: number = 1;

  @Input()
  public fractionDigits: number = 2;

  public digitsInfo = `${this.minIntegerDigits}.${this.fractionDigits}`

  constructor() {
  }

  ngOnInit(): void {
  }

}
