import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();       // new method since 17.3 uses output()

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '5';

  constructor(private investmentService: InvestmentService) {}        // Accessor can be either private or public

  onSubmit() {
    // console.log(`enteredInitialInvestment: ${this.enteredInitialInvestment}\nenteredAnnualInvestment: ${this.enteredAnnualInvestment}\nenteredExpectedReturn: ${this.enteredExpectedReturn}\nenteredDuration: ${this.enteredDuration}`);
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment,
    //   annualInvestment: +this.enteredAnnualInvestment,
    //   expectedReturn: +this.enteredExpectedReturn,
    //   duration: +this.enteredDuration
    // });

    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    });
  }
}
