<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\headerThemeSliceController;
use App\Http\Controllers\Api\navbarThemeSliceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//user
Route::post('signup',[AuthController::class,'signup']);
Route::post('login',[AuthController::class,'login']);
Route::get('fetchUsers',[AuthController::class,'fetchUsers']);


//Navbar==Link
Route::get('navbarTheme/fetchNavbarTheme',[navbarThemeSliceController::class,'fetchNavbarTheme']);//view index
Route::post('navbarTheme/addLinkNavbarTheme',[navbarThemeSliceController::class,'addlinknavbarTheme']);//create
Route::put('navbarTheme/updateNavbarTheme/{id}',[navbarThemeSliceController::class,'updateNavbarTheme']);//updata
Route::delete('navbarTheme/deleteNavbarTheme/{id}',[navbarThemeSliceController::class,'deleteNavbarTheme']);//delete

//Header==Linkes_Content
Route::get('linkes_Content/fatchLinkes_Content',[headerThemeSliceController::class,'fatchLinkes_Content']);//view index
Route::post('linkes_Content/addLinkes_Content',[headerThemeSliceController::class,'addLinkes_Content']);//create
Route::put('linkes_Content/updateLinkes_Content/{id}',[headerThemeSliceController::class,'updateLinkes_Content']);//updata
Route::delete('linkes_Content/deleteLinkes_Content/{id}',[headerThemeSliceController::class,'deleteLinkes_Content']);//delete


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/*Route::middleware(['auth:sanctum','/user' ])->group(function(){
 //navbarTheme
Route::get('navbarTheme/fetchNavbarTheme',[navbarThemeSliceController::class,'fetchNavbarTheme']);
Route::post('navbarTheme/addLinkNavbarTheme',[navbarThemeSliceController::class,'addlinknavbarTheme']);
Route::put('navbarTheme/updateNavbarTheme/${id}',[navbarThemeSliceController::class,'updateNavbarTheme']);
Route::delete('navbarTheme/deleteLinkNavbarTheme/${id}',[navbarThemeSliceController::class,'deleteLinkNavbarTheme']);

});*/


