import { Component, OnInit } from '@angular/core';
import { Book } from '../Books/book';
import { BookService } from '../Books/book.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  books: Book[] = [];
  constructor(public bookservice:BookService) { }

  ngOnInit(): void {
     this.bookservice.getAll().subscribe((data: Book[])=>{
      this.books = data;
      console.log(this.books);
    })
  }
  deleteBook(id:number){
    this.bookservice.delete(id).subscribe(res => {
      this.books = this.books.filter(item => item.id !== id);
      console.log('Book deleted successfully!');
 })
  }

}
