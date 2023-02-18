<?php
  namespace App\Http\Controllers;

   use App\Models\Book;
   use Illuminate\Http\Request;

class BookController extends Controller
{

  public function index()
 {
 $books = Book::all();
 return response()->json($books);
 }

 public function store(Request $request)
 {
 $request->validate([
 'title' => 'required',
 'author' => 'required',
 'price' => 'required',
 ]);
 Book::create($request->all());
 return response()->json('Book created!');
 }

public function show($id)
 {
 $book = Book::find($id);
 return response()->json($book);
 }

public function update(Request $request, $id)
 {
 $request->validate([
 'title' => 'required',
 'author' => 'required',
 'price' => 'required',
 ]);
 $book = Book::find($id);
 $book->update($request->all());
 return response()->json('Book updated!');
 }

 public function destroy($id)
 {
 Book::find($id)->delete();
 return response()->json('Book deleted!');
 }
}

