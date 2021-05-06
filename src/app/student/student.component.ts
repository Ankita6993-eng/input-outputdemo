import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public forms: FormGroup|any;
  @Input() formdata:any=[]
  @Input("selectedId") selectedId: any;
  @Input("isEdit") isEdit: boolean|any;
  @Input()update_user : AppComponent|any
  
  @Output() onadd=new EventEmitter()
  @Output() onUpdate=new EventEmitter()
  
  obj:any

  constructor(private formBuilder: FormBuilder) { 
    this.forms = this.formBuilder.group({
      id: [""],
    name: [""],
    username: [""],
    email: [""],
    phone: [""]
    })
    console.log('this.selected', this.selectedId);
    
  }

  ngOnInit(): void {
    console.log('this.selected', this.selectedId);
  }
  onSubmit(){
    this.obj = this.forms.value;
    //this.onadd.emit(this.obj);

    if (this.selectedId) {
     
      this.onUpdate.emit(this.obj);
      this.forms.reset();
  }  else{
    this.onadd.emit(this.obj);
    this.forms.reset();
  }
    console.log(this.forms.value)
     this.forms.reset();
  }
}
