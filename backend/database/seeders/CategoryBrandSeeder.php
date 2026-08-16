<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Brand;

class CategoryBrandSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Radios Portátiles',
            'Radios Móviles',
            'Repetidores',
            'Accesorios',
            'Antenas',
        ];

        foreach ($categories as $catName) {
            Category::firstOrCreate(['name' => $catName]);
        }

        $brands = [
            'Motorola',
            'Hytera',
            'Kenwood',
            'Icom',
            'TX Pro',
        ];

        foreach ($brands as $brandName) {
            Brand::firstOrCreate(['name' => $brandName]);
        }
    }
}
