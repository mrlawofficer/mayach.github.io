---
layout: home
title: Home
---

<section class="hero">
  <div class="container">
    <div class="hero-card" style="display:flex;gap:28px;align-items:center;">
      <!-- left column: logo + firm heading -->
      <div style="flex:1;">
        <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Mayach & Co. Logo" style="width:240px; display:block; margin-bottom:18px;">
        <h1 style="margin:0 0 6px;">Mayach & Co.</h1>
        <p class="lead">A research-led legal practice — litigation, insolvency, and advisory with an emphasis on clear legal writing and strategy.</p>
        <p style="margin-top:14px;">
          <a class="btn" href="{{ '/blog/' | relative_url }}">Read Insights</a>
          <a class="btn ghost" href="{{ '/about/cv/' | relative_url }}">View CV</a>
        </p>
      </div>

      <!-- right column: profile image & quick details -->
      <div style="width:320px;">
        <div class="stack-card" style="padding:18px; text-align:center;">
          <img src="{{ '/assets/images/profile.png' | relative_url }}" alt="Himanshu Soni" style="width:100%; height:auto; border-radius:12px; object-fit:cover;">
          <h3 style="margin:12px 0 4px;">Himanshu Soni</h3>
          <div class="muted">Founder — Mayach & Co. | Law Student, Law Centre-1, University of Delhi</div>
          <div style="margin-top:10px;font-size:14px;">
            <div><strong>Email:</strong> <a href="mailto:office@mayach.in">office@mayach.in</a></div>
            <div><strong>Contact:</strong> <a href="tel:+917355057573">+91 73550 57573</a></div>
            <div style="margin-top:8px;"><a href="{{ '/about/cv/' | relative_url }}" class="btn ghost">Full CV</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Short intro / quick links -->
<section class="section">
  <div class="container">
    <h2>Practice & Publications</h2>
    <p class="muted">I write and publish on insolvency, intellectual property, evidence and procedural practice. Read insights, case notes and full articles from my publication.</p>

    <div class="grid" style="margin-top:18px;">
      <div class="card">
        <h4>Intellectual Property</h4>
        <p class="muted">Case notes, analysis and commentary on IP law and policy.</p>
        <p><a href="/blog/intellectual-property/" class="btn ghost">Open</a></p>
      </div>
      <div class="card">
        <h4>Insolvency & Debt</h4>
        <p class="muted">Practical notes for creditors, corporate counsel and tribunals.</p>
        <p><a href="/blog/insolvency/" class="btn ghost">Open</a></p>
      </div>
      <div class="card">
        <h4>Procedure & Evidence</h4>
        <p class="muted">Evidence law notes, procedural strategy and case law summaries.</p>
        <p><a href="/blog/evidence/" class="btn ghost">Open</a></p>
      </div>
    </div>
  </div>
</section>
