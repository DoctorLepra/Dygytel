<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = ['id', 'name'];

    protected static function booted(): void
    {
        static::creating(function (Category $category) {
            if (! $category->id) {
                $last = static::orderBy('id', 'desc')->first();
                if ($last && preg_match('/CAT(\d+)/', $last->id, $matches)) {
                    $nextNum = (int)$matches[1] + 1;
                } else {
                    $nextNum = 1;
                }
                $category->id = 'CAT' . str_pad((string)$nextNum, 3, '0', STR_PAD_LEFT);
            }
        });
    }
}
