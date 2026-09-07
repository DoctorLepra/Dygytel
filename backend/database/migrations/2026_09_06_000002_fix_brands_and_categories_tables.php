<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Fix categories table
        if (Schema::hasTable('categories')) {
            $existingCategories = DB::table('categories')->get();
            Schema::dropIfExists('categories');
            
            Schema::create('categories', function (Blueprint $table) {
                $table->id();
                $table->string('name')->unique();
                $table->timestamps();
            });

            foreach ($existingCategories as $cat) {
                DB::table('categories')->updateOrInsert(
                    ['name' => $cat->name],
                    ['created_at' => $cat->created_at ?? now(), 'updated_at' => $cat->updated_at ?? now()]
                );
            }
        }

        // 2. Fix brands table
        if (Schema::hasTable('brands')) {
            $existingBrands = DB::table('brands')->get();
            Schema::dropIfExists('brands');
            
            Schema::create('brands', function (Blueprint $table) {
                $table->id();
                $table->string('name')->unique();
                $table->timestamps();
            });

            foreach ($existingBrands as $brand) {
                DB::table('brands')->updateOrInsert(
                    ['name' => $brand->name],
                    ['created_at' => $brand->created_at ?? now(), 'updated_at' => $brand->updated_at ?? now()]
                );
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // No reverse needed as id() is the canonical schema
    }
};
