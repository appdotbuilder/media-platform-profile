<?php

use function Pest\Laravel\get;

it('loads the homepage successfully', function () {
    get('/')
        ->assertStatus(200)
        ->assertInertia(function ($page) {
            $page->component('welcome');
        });
});

it('loads the news page successfully', function () {
    get('/news')
        ->assertStatus(200)
        ->assertInertia(function ($page) {
            $page->component('news');
        });
});

it('loads the education page successfully', function () {
    get('/education')
        ->assertStatus(200)
        ->assertInertia(function ($page) {
            $page->component('education');
        });
});

it('has all main routes accessible', function () {
    $routes = ['/', '/news', '/education'];

    foreach ($routes as $route) {
        get($route)->assertStatus(200);
    }
});

it('can navigate between pages', function () {
    // Test home page navigation
    get('/')->assertStatus(200);

    // Test news page navigation  
    get('/news')->assertStatus(200);

    // Test education page navigation
    get('/education')->assertStatus(200);
});