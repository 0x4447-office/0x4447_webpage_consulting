# 0x4447 Consulting

This this website contains all the details related to the Consulting experities of 0x4447, LLC.

# How to run locally

- bundle install
- gem install jekyll bundler
- bundle exec jekyll serve

# How to set header image to posts

When creating a post, to add the header image in the beginning of the content; use header variable and address it to the image path.
e.g.
```
--- 
header: /path/to/header.png
---
{CONTENT HERE}
```

# How to add responsive images to posts

To add responsive images in markdown add '#responsive' at the end of the image source path.
e.g.
```
![alt text](/path/to/image.png#responsive)
```