<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('api')->group(function () {
    Route::get('allbooks', [App\Http\Controllers\BookController::class,'index']);
    Route::get('book{id}', [App\Http\Controllers\BookController::class,'show']);
    Route::post('update{id}', [App\Http\Controllers\BookController::class,'update']);
    Route::post('store', [App\Http\Controllers\BookController::class,'store']);
    Route::delete('delete{id}', [App\Http\Controllers\BookController::class,'destroy']);
});
