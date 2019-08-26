<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Article;

use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ArticleTest extends TestCase
{
    public function test_can_create_articles()
    {
        $fakeArticle = [
            'title' =>  $this->faker->sentence,
            'content' =>  $this->faker->paragraph,
            'slug' => $this->faker->word
        ];

        $response = $this->json('POST', '/api/articles', $fakeArticle);
        $response
            ->assertStatus(201)
            ->assertJson([
                'message' => 'Article successfully created',
            ]);
    }

    public function test_can_get_all_articles()
    {
        $articles = factory(Article::class, 2)->create()->map(function ($article) {
            return $article->only(['title', 'content']);
        });

        $response = $this->json('GET', '/api/articles');
        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                '*' => ['title', 'content'],
            ], $articles->toArray());
    }

    public function test_can_get_article_by_slug()
    {
        $article = factory(Article::class)->create();

        $getArticleUrl = "/api/articles/{$article->slug}";

        $this->json('GET', $getArticleUrl)
            ->assertStatus(200);
    }

    public function test_can_update_article()
    {
        $article = factory(Article::class)->create();
        $putArticleUrl = "/api/articles/{$article->_id}";
        $updatedData = [
            'content' => $this->faker->paragraph
        ];

        $this->json('PUT', $putArticleUrl, $updatedData)
            ->assertStatus(200);
    }

    public function test_can_delete_article()
    {
        $article = factory(Article::class)->create();
        $deleteArticleUrl = "/api/articles/{$article->_id}";

        $this->json('DELETE', $deleteArticleUrl)
            ->assertStatus(204);
    }
}
