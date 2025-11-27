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
      <img src="{{ '/assets/images/hero.jpg' | relative_url }}" alt="Legal books and documents">
    </div>
  </div>
</section>

<section id="insights" class="section">
  <div class="container">
    <div class="section-head">
      <h2>Latest Insights</h2>
      <p class="muted">Curated picks from the publication and selected in-house posts.</p>
    </div>

    {% include latest-posts.html count=6 %}
  </div>
</section>

<section id="contact" class="section alt">
  <div class="container contact-wrap">
    <div class="contact-column">
      <h2>Contact</h2>
      <p>For enquiries or consultation, email <a href="mailto:office@mayach.in">office@mayach.in</a></p>
      <dl class="contact-list">
        <dt>Office</dt><dd>Kanpur, Uttar Pradesh</dd>
        <dt>Phone</dt><dd>+91 - 00000 00000</dd>
      </dl>
    </div>

    <div class="contact-column">
      <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <label><input name="name" placeholder="Full name" required></label>
        <label><input name="email" type="email" placeholder="Email" required></label>
        <label><input name="phone" placeholder="Phone"></label>
        <label><textarea name="message" placeholder="How can we help?" required></textarea></label>
        <button class="btn" type="submit">Send</button>
      </form>
    </div>
  </div>
</section>