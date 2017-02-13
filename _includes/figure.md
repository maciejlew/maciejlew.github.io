<figure>
    <picture>
        <source srcset="{{ page.img_hosting }}/300/{{ image }}" media="(max-width: 400px)">
        <source srcset="{{ page.img_hosting }}/700/{{ image }}" media="(max-width: 800px)">
        <a href="{{ page.img_hosting }}/{{ image }}">
        <img src="{{ page.img_hosting }}/{{ image }}" alt="{{ alt }}">
        </a>
    </picture>
    <figcaption>{{ caption }}</figcaption>
</figure>
