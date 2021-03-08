# 0x4447 Consulting

This this website contains all the details related to the Consulting experities of 0x4447, LLC.

# How to run locally

- bundle install
- bundle exec jekyll serve

# How to set cover image to articles

When creating an article, to add the cover image in the beginning of the content; use the `cover` variable and address it to the image path.

e.g.
```
--- 
cover: /path/to/cover.jpg
---
{CONTENT HERE}
```

# How to add responsive images to posts

To add responsive images in markdown add '#responsive' at the end of the image source path.
e.g.
```
![alt text](/path/to/image.png#responsive)
```

# How to add a new category

- copy `/articles/experience/index.html` to `/articles/cheeseburgers/index.html`, e.g.

```
---
layout: articles
category:
    name: Cheeseburgers
    slug: cheeseburgers
---

{%- include category-section.html category=page.category -%}

```

- tag your new post with `cheeseburgers`
