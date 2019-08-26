<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Article extends Eloquent
{
    protected $fillable = ['id', 'title', 'content', 'slug'];
}
