---
layout: home
title: Home
---
<section class="hero">
  <div class="hero-inner container">
    <div class="hero-copy">
      <h1>Mayach — Legal Practice & Thought Leadership</h1>
      <p class="lead">Practical legal analysis, case notes, and actionable commentary. Read our insights or explore my Medium publication.</p>
      <p class="cta">
        <a class="btn" href="/blog/">Read Blog</a>
        <a class="btn btn-outline" href="https://mrlawofficer.medium.com" target="_blank" rel="noopener">Visit my Medium</a>
      </p>
    </div>
    <div class="hero-image">
      <!-- fallback to Unsplash if no local hero image uploaded -->
      <img src="{{ '/assets/images/hero.jpg' | relative_url }}" alt="Legal books and documents">
    </div>
  </div>
</section>

{% include latest-posts.html count=6 %}
