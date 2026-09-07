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
        'pdf_specs',
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

    protected $appends = [
        'pdf_specs_url',
    ];

    /**
     * Get the full public URL of the uploaded technical specifications PDF.
     */
    public function getPdfSpecsUrlAttribute(): ?string
    {
        if (! $this->pdf_specs) {
            return null;
        }

        if (str_starts_with($this->pdf_specs, 'http://') || str_starts_with($this->pdf_specs, 'https://')) {
            return $this->pdf_specs;
        }

        return url('storage/' . $this->pdf_specs);
    }
}
