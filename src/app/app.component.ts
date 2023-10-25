import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog-Website';
  timeoutId:any;
  userInactive: Subject<any> = new Subject();
 
 constructor() {
    this.checkTimeOut();
    this.userInactive.subscribe((message) => {
      // Logout logic or redirect to login page
      // alert(message);
      console.log(message)
    });
  }
 
  checkTimeOut() {
    this.timeoutId = setTimeout(
      () => this.userInactive.next("User has been inactive for 60 seconds"), 60000);
  }
 
  @HostListener('window:keydown', ['$event'])
  checkUserKeyboardActivity(event:KeyboardEvent) {
    console.log("keyboard event", event)
    clearTimeout(this.timeoutId);
    this.checkTimeOut();
  }

  @HostListener('window:mousemove', ['$event'])
  checkUserMouseActivity(event: MouseEvent) {
    console.log("mouse event", event)
    clearTimeout(this.timeoutId);
    this.checkTimeOut();
  }

  @HostListener('window:click', ['$event'])
  checkUserClickActivity(event: any) {
    console.log("click event", event)
    clearTimeout(this.timeoutId);
    this.checkTimeOut();
  }
}
