import { Component,OnInit,ViewChild } from '@angular/core';
import {MyServiceService} from './my-service.service'
import {StudentComponent} from './student/student.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'input-output';
 
  users:any=[]
  selectedId:any
  isEdit:boolean=false
  user1:any
  @ViewChild(StudentComponent) public usercomp: StudentComponent|any;

  constructor(private userService: MyServiceService) { }

  
  ngOnInit() {this.getData()}

  getData(){
    this.userService.getUser().subscribe((data:any)=>{
      this.users=data
      console.log('this.users', this.users);  
    })
  }

  addUser(event:any){
    this.userService.postUser(event)
  .subscribe(myData => this.users.push(myData));
   }

   delete(index:any){
     if(index>-1){
         this.users.splice(index,1)
    }
   }

   public edittUser(user:any,index:any){
      console.log('StudentComponent', this.usercomp);
      this.usercomp.forms.setValue({
          id: index,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone
      })
      this.selectedId=index
      console.log('selectedId', this.selectedId);
      
      this.user1=user
      console.log('this.user1', this.usercomp.forms);
   }
   public update_user(){
     console.log('this.selectedId', this.selectedId);
     let tmp_data=this.usercomp.forms.value
     this.userService.updateUser(tmp_data).subscribe((result:any)=>{
      const updaterecored=this.users.find((user:any)=>user.id===result.id);
      console.log('typeOf updaterecored',  updaterecored)  
      this.users.splice(this.selectedId,1,result); 
      this.selectedId=""
     })

   }



}
