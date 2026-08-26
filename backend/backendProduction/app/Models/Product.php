<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'sku',
        'name',
        'description',
        'price',
        'original_price',
        'image',
        'category',
        'brand',
        'in_stock',
        'features',
        'specs',
        'in_the_box',
    ];

    protected $casts = [
        'image' => 'array',
        'in_stock' => 'boolean',
        'features' => 'array',
        'specs' => 'array',
        'in_the_box' => 'array',
        'price' => 'decimal:2',
        'original_price' => 'decimal:2',
    ];
}
