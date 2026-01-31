---
layout: page
title: tutorials
permalink: /tutorials/
description: Tutorials, guides, and how-to notes.
nav: true
nav_order: 3
---

A curated list of hands-on guides and practical notes. New tutorials will appear here as they are published.

{% assign tutorial_posts = site.posts | where_exp: "post", "post.tags contains 'tutorial'" %}

{% if tutorial_posts.size > 0 %}

<ul class="post-list">
  {% for post in tutorial_posts %}
    <li>
      <h3>
        <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No tutorials yet. Check back soon.</p>
{% endif %}
