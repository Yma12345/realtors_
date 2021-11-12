<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('objects', 'App\Http\Controllers\ObjectsController@get');
Route::get('objects/{id}', 'App\Http\Controllers\ObjectsController@getById');
