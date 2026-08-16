<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WebContent;
use Illuminate\Http\Request;

class WebContentController extends Controller
{
    public function index()
    {
        // Return web contents grouped by page and mapped to key-value pairs
        $contents = WebContent::all()->groupBy('page')->map(function ($items) {
            return $items->mapWithKeys(function ($item) {
                $value = $item->value;
                if ($item->type === 'image' && $value) {
                    if (str_starts_with($value, '[')) {
                        $arr = json_decode($value, true) ?? [];
                        $value = array_map(fn ($path) => str_starts_with($path, 'http') ? $path : url('storage/' . $path), $arr);
                    } else {
                        $value = str_starts_with($value, 'http') ? $value : url('storage/' . $value);
                    }
                } elseif ($item->type === 'json' && $value) {
                    $value = json_decode($value, true) ?? [];
                }
                return [$item->key => $value];
            });
        });
        
        return response()->json($contents);
    }
}
