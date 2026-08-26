<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        // Return all products ordered by latest created first
        $products = Product::latest()->get();
        return response()->json($products);
    }

    public function show($sku)
    {
        // Find product by sku
        $product = Product::where('sku', $sku)->firstOrFail();
        return response()->json($product);
    }
}
