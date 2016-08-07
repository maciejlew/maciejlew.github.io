{% assign site_modified = site.date %}
{% if site.posts %}
    {% for post in site.posts %}
        {% if post.date %}
            {% assign site_modified = post.date | date: "%Y-%m-%d" %}
            {% break %}
        {% endif %}
    {% endfor %}
{% endif %}
{% if site.pages %}
    {% for page in site.pages %}
        {% if page.date and page.date > site_modified %}
            {% assign site_modified = page.date | date: "%Y-%m-%d" %}
        {% endif %}
    {% endfor %}
{% endif %}
<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebSite",
        {% if site.name %}"name": "{{ site.name }}",{% endif %}
        {% if site.description %}"description": "{{ site.description }}",{% endif %}
        {% if site.url %}"url": "{{ site.url }}",{% endif %}
        {% if site.author %}"author": 
            {
                "@type": "Person",
                "name": "{{ site.author }}"
            },{% endif %}
        {% if site.date %}"dateCreated": "{{ site.date }}",{% endif %}
        "dateModified": "{{ site_modified }}"
    }
</script>
<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "{% if page.type %}{{ page.type }}{% elsif page.is_post %}BlogPosting{% else %}WebPage{% endif %}",
        {% if page.title %}"name": "{{ page.title }}",{% endif %}
        {% if page.description %}"description": "{{ page.description }}",{% endif %}
        {% if page.author or site.author %}"author": 
            {
                "@type": "Person",
                "name": "{% if page.author %}{{ page.author }}{% else %}{{ site.author }}{% endif %}"
            },{% endif %}
        {% if page.date %}"dateCreated": "{{ page.date }}",{% endif %}
        {% if page.breadcrumbs %}"breadcrumb":
            {
                "@type": "BreadcrumbList",
                "itemListElement": [{% for breadcrumb in page.breadcrumbs %}
                    {
                        "@type": "ListItem",
                        "position": {{ forloop.index }},
                        "item": {
                            "@type": "{% if breadcrumb.type %}{{ breadcrumb.type }}{% else %}WebPage{% endif %}",
                            "@id": "{{ site.url }}{% if breadcrumb.url == 'page.url' %}{{ page.url }}{% else %}{{ breadcrumb.url }}{% endif %}",
                            "name": "{% if breadcrumb.title == 'page.title' %}{{ page.title }}{% else %}{{ breadcrumb.title }}{% endif %}"
                        }
                    }{% unless forloop.last %},{% endunless %}
                {% endfor %}]
            },{% endif %}
        "url": "{{ site.url }}{{ page.url }}"
    }
</script>
{% if page.reviews %}
{% for r in page.reviews %}
<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "Review",
        "itemReviewed":
        {
            "@type": "{{ r.type }}",
            "name": "{{ r.name }}",
            {% if r.type == 'Book' %}"isbn": "{{ r.isbn }}",
            "author": 
            {
                "@type": "Person",
                "name": "{{ r.author }}",
                "sameAs": "{{ r.author_url }}"
            },{% endif %}
            "url": "{{ r.url }}"
        },
        "reviewBody": "{{ r.content }}",
        "reviewRating":
        {
            "@type": "Rating",
            "ratingValue": "{{ r.rating }}"
        },
        {% if page.author or site.author %}"author": 
        {
            "@type": "Person",
            "name": "{% if page.author %}{{ page.author }}{% else %}{{ site.author }}{% endif %}",
            "sameAs": "{{ site.url }}"
        },{% endif %}
        {% if page.date %}"datePublished": "{{ page.date }}",{% endif %}
        {% if site.name %}"publisher": "{{ site.name }}",{% endif %}
        "description": "{{ r.description }}",
        "url": "{{ site.url }}{{ page.url }}"
    }
</script>
{% endfor %}
{% endif %}