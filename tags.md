---
layout: base.njk
title: All Tags
permalink: /tags/index.html
---

# All Tags

<ul class="tag-list">
  {% for tag in collections.tagList %}
    <li><a href="/tags/{{ tag | slug }}/">{{ tag }}</a></li>
  {% endfor %}
</ul>
