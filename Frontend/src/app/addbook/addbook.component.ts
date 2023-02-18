import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,


} from '@angular/forms';
import { BookService } from '../Books/book.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
  reactiveForm!: FormGroup;

  constructor(public bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ]),
      author: new FormControl('', [
        Validators.required,
      ]),
      price: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('')
    });

  }

  get f(): { [key: string]: AbstractControl } {
    return this.reactiveForm.controls;
  }
  submit(){
    console.log(this.reactiveForm.value);
    this.bookService.create(this.reactiveForm.value).subscribe(res => {
         console.log('Book created successfully!');
         this.router.navigateByUrl('/');
    })
  }
}
