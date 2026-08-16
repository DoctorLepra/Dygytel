<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = ['id', 'name'];

    protected static function booted(): void
    {
        static::creating(function (Brand $brand) {
            if (! $brand->id) {
                $last = static::orderBy('id', 'desc')->first();
                if ($last && preg_match('/BR(\d+)/', $last->id, $matches)) {
                    $nextNum = (int)$matches[1] + 1;
                } else {
                    $nextNum = 1;
                }
                $brand->id = 'BR' . str_pad((string)$nextNum, 3, '0', STR_PAD_LEFT);
            }
        });
    }
}
