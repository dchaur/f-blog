<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'content' => Str::random(40),
        'slug' => Str::random(8),
        'creation_date' => new DateTime('2 days')
    ];
});
