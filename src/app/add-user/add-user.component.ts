import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private _fb: FormBuilder) { }
  _userFormGroup: FormGroup;
  ngOnInit(): void {

    this._userFormGroup = this._fb.group({
      userId: ['', [Validators.required]],
      // name: ['',[Validators.required,this.nameValidator()]],
      // email:[' ',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      // phno:['',[Validators.required]],
      // address:['',[Validators.required]],

    })
  }

}
