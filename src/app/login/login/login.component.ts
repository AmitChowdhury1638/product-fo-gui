import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  res: any;
  userDetailForm!: FormGroup;
  constructor(private service: RegisterService,
              private router: Router) { }

  ngOnInit(): void {
    this.userDetailForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
     
  });
  }

  onSubmit() {
    console.log(this.userDetailForm?.value.username)
    this.service.getUserDetail().subscribe((data)=>{
      console.log(data)
      for(let i=0;i<data.length;i++){
        if(this.userDetailForm?.value.username == data[i].username && this.userDetailForm?.value.password == data[i].password ){
          console.log("welcome") 
          this.router.navigateByUrl('/shoping-cart')
        }
      }

    })
   
  }



  
  
}
