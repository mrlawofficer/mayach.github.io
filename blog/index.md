---
layout: default
title: Blog
permalink: /blog/
---
<h1>Insights</h1>
<p class="muted">Articles, commentary and analysis.</p>

{% for post in paginator.posts %}
  <article class="post-card">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="muted">{{ post.date | date: "%B %-d, %Y" }} &nbsp;|&nbsp; {{ post.author | default: site.title }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
    <p><a href="{{ post.url | relative_url }}">Read →</a></p>
  </article>
{% endfor %}
