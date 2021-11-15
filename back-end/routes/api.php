<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('objects', 'App\Http\Controllers\ObjectsController@get');
Route::get('objects/{id}', 'App\Http\Controllers\ObjectsController@getById');
Route::post('objects/create', 'App\Http\Controllers\ObjectsController@createObject');
Route::post('objects/edit/{id}', 'App\Http\Controllers\ObjectsController@editObject');
Route::post('objects/delete/{id}', 'App\Http\Controllers\ObjectsController@delete');

//posts functions to the route

