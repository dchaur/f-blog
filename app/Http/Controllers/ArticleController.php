<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;
use App\Http\Resources\ArticleCollection;

class ArticleController extends Controller
{
    /**
     * Display all articles from collection
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ArticleCollection(Article::all());
    }

    /**
     * stores a new Article
     */
    public function store(Request $request)
    {
        $article = new Article();
        $article->title = $request['title'];
        $article->content = $request['content'];
        $article->slug = $request['slug'];
        $article->save();

        return response()->json('Article successfully created');
    }

    /**
     * Display an article by slug
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        return Article::where('slug', '=', $slug)->get();
    }

    /**
     *  Updates an article by id
     * @param guid $id
     * @return JSON response
     */
    public function update($id, Request $request)
    {
        $article = Article::find($id);
        $article->title = $request['title'];
        $article->content = $request['content'];
        $article->slug = $request['slug'];
        $article->save();

        return response()->json('Article updated successfully');
    }

    /**
     * Removes an article by id
     */
    public function destroy($id, Request $request)
    {
        $article = Article::find($id);
        $article->delete();

        return response()->json('Article deleted successfully');
    }
}
