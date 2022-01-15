import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from '../services/checkout/checkout.service';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: FormGroup;

  constructor(private service: CheckoutService,
               private router: Router) { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      firstname: new FormControl('',  Validators.required),
      lastname: new FormControl('',  Validators.required),
      buildingname: new FormControl('',  Validators.required),
      area: new FormControl(''),
      landmark: new FormControl(''),
      city: new FormControl('',  Validators.required),
      state: new FormControl('',  Validators.required),
      emailId: new FormControl('', Validators.required),
      mobilenumber: new FormControl('',  Validators.required),
  });
}

onSubmit() {
  this.service.payment(this.checkoutForm?.value).subscribe(data=>{
    this.ngOnInit();
    console.log(data);
  });
  this.router.navigateByUrl('/login')
  //this.getJewelleries();
  //this.display=false;
}

}
