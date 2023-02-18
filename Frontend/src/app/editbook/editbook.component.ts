import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../Books/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../Books/book';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css'],
})
export class EditbookComponent implements OnInit {
  reactiveForm!: FormGroup;
  id!: number;
  book!: Book;
  constructor(
    public bookservice: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookservice.find(this.id).subscribe((data: Book) => {
      this.book = data;
    });
    this.reactiveForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ]),
      author: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }
  submit() {
    console.log(this.reactiveForm.value);
    this.bookservice
      .update(this.id, this.reactiveForm.value)
      .subscribe((res) => {
        console.log('book updated successfully!');
        this.router.navigateByUrl('');
      });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.reactiveForm.controls;
  }
}
