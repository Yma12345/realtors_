<?php

namespace App\Http\Controllers;

use App\Models\Objects;
use Illuminate\Http\Request;

class ObjectsController extends Controller
{
    public function get()
    {
        $objects = Objects::get();
        return response()->json($objects);
    }

    public function getById($id)
    {
        $objects = Objects::find($id);
        return response()->json($objects);
    }
}
