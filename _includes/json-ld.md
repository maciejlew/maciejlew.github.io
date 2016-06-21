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
                            "@id": "{{ site.url }}{{ breadcrumb.url }}",
                            "name": "{{ breadcrumb.title }}"
                        }
                    }{% unless forloop.last %},{% endunless %}
                {% endfor %}]
            },{% endif %}
        "url": "{{ site.url }}{{ page.url }}"
    }
</script>
