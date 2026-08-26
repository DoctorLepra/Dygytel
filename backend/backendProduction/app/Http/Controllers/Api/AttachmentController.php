<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Attachment;
use Illuminate\Http\JsonResponse;

class AttachmentController extends Controller
{
    /**
     * Get all active public attachments.
     */
    public function index(): JsonResponse
    {
        $attachments = Attachment::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->orderBy('id', 'asc')
            ->get(['id', 'title', 'file_path', 'sort_order']);

        return response()->json($attachments);
    }
}
