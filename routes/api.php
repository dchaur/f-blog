<?php

use Illuminate\Http\Request;

Route::prefix('auth')->group(function () {
    Route::post('reg-admin', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::post('refresh-token', 'AuthController@refresh');

    Route::group(['middleware' => ['auth:api']], function () {
        Route::get('admin', 'AuthController@admin');
        Route::post('logout', 'AuthController@logout');
    });
});

Route::middleware('auth:api')->get('/admin', function (Request $request) {
    return $request->admin();
});

Route::resources([
    'articles' => 'ArticleController'
]);
