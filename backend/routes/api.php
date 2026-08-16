<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{sku}', [ProductController::class, 'show']);
Route::get('/categories', function () {
    return response()->json(\App\Models\Category::orderBy('name')->pluck('name'));
});
Route::get('/brands', function () {
    return response()->json(\App\Models\Brand::orderBy('name')->pluck('name'));
});
Route::get('/content', [\App\Http\Controllers\Api\WebContentController::class, 'index']);
