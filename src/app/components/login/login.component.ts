import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string = "";
  email:string = "";
  password:string = "";

  currentLoginStatus = "false";

  constructor(private router: Router) { }

  ngOnInit(): void {
    

    const status = this.checkLoginStatus().toString()
      this.currentLoginStatus = status;
      if(status == "true"){
        console.log("The stat is true")
        this.currentLoginStatus = "true";
        if(confirm("You are logged in, would you like to navigate to the home page?")){
          this.navigateToPath("/")
        }
      }
      else if(status == "false"){
        this.currentLoginStatus = "false";
      }
  }

  loginAttempt(){
    if(this.currentLoginStatus == "false"){
      let nameInput = this.name;
      let emailInput = this.email;
      let passwordInput = this.password;
  
      if(nameInput != "" && emailInput != "" && passwordInput != ""){


        this.navigateToPath("/");
  
      }else if(nameInput == ""){
        console.log("We're in the login attempt")
        alert("The name field is empty");
      }
      else if(emailInput == ""){
        alert("The email field is empty");
      }
      else if(passwordInput == ""){
        alert("The password field is empty");
      }
    }else{
      if(confirm("You are logged in, would you like to navigate to the home page?")){
        this.navigateToPath("/")
      }
    }

  }

  clearForm(){
    this.name="";
    this.password="";
    this.email="";
  }

  navigateToPath (path :string){
    this.router.navigateByUrl(path);
  }

  checkLoginStatus () :string{
    return "false"
  }

}
