---
layout: page
title: "Kategorie wpisów na blogu LionNet"
description: "OOP, LMS, QA, BLOG, object orientet programming, lan management system,
quality assurance"
permalink: /blog/tags/
type: CollectionPage
date: "2016-02-14 18:27:00"
breadcrumbs:
  - url: /
    title: "LionNet"
    type: AboutPage
  - url: /blog/
    title: "Blog"
    type: CollectionPage
  - url: /blog/tags/
    title: "Kategorie wpisów"
    type: CollectionPage
---

### Kategorie

<ul class="tag-cloud">
{% for tag in site.tags reversed %}
  <li style="font-size: {{ tag | last | size | times: 100 | divided_by: site.tags.size | plus: 70  }}%">
    <a href="#{{ tag | first | slugize }}">
      {{ tag | first }}
    </a>
  </li>
{% endfor %}
</ul>

<div id="archives">
{% for tag in site.tags reversed %}
  <div class="archive-group">
    {% capture tag_name %}{{ tag | first }}{% endcapture %}
    <h4 id="#{{ tag_name | slugize }}">{{ tag_name }}</h4>
    <a name="{{ tag_name | slugize }}"></a>
    {% for post in site.tags[tag_name] %}
    <article class="archive-item">
      <h5><a href="{{ root_url }}{{ post.url }}">{{post.title}}</a></h5>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>