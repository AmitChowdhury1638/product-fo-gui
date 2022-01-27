import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDetailForm!: FormGroup;

  constructor(private service: RegisterService,
               private router: Router) { }

  ngOnInit(): void {
    this.userDetailForm = new FormGroup({
      username: new FormControl('',  Validators.required),
      //name: new FormControl(''),
      emailId: new FormControl(''),
      password: new FormControl('',Validators.required),
      mobileNumber: new FormControl(''),
      language: new FormControl(''), 
      
  });
}

onSubmit() {
  this.service.createUserDetail(this.userDetailForm?.value).subscribe(data=>{
    this.ngOnInit();
    console.log(data);
  });
  this.router.navigateByUrl('/login')
  //this.getJewelleries();
  //this.display=false;
}

}
