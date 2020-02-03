# Elphin

A custom, photo-centric, theme for [Ghost](http://github.com/tryghost/ghost/). Released free of charge under MIT license.

Based on the London theme by the Ghost folk, but with heavy emphais on the images rather than image rich text. (WIP)

I had a bunch of specific requirements to start with:

* Landing page without feed with a background image, easily editable through
  the site editor,

* About page, with same background image as the landing page,

* All other pages just solid themeable background,

* Gallery page(s) with a masonry layout that preserves image ratio.

Ghost doesn’t directly facilitate all of this but I wanted to make it work without hacking Ghost itself, so a bit of lateral thinking was needed.

The `default.hbs` template works around the fact that Ghost index page cannot
be one of the static pages. It uses the tile, contents, and feature image from a post tagged ‘#main`; this post must be among the 10 oldest posts on the site.

The `page-about.hbs` template is used to render the About page (created normally
through the site Editor). Unlike the regular static pages, this page has the
same background as the landing page.

The image galleries are implemented as a tag archives; the main Gallery shows
images tagged with the ‘Gallery’ tag, the `gallery.hbs` template which maximises
the screen real estate for the images (no title or descriptive blob). Other
galleries can simply be created using other tags (and will use the `tag.hbs`
template). In both cases masonry layout is used.

The `page-browse.hbs` is a custom template for a browse page; it shows the
complete feed, plus a small menu with all public tags (aka galleries).

In order for things to work, you need to setup custom routing by uploading the
routes.yml file to the ghost intallation.

**The main files are:**

- `default.hbs`     - The main template file
- `home.hbs`        - Used for the home page
- `post.hbs`        - Used for individual posts
- `page.hbs`        - Used for individual pages
- `post-card.hbs`   - A partial used to render the gallery ‘thumbs’
- `page-about.hbs`  - Used for the About Page
- `page-browse.hbs` - A main post feed page.
- `tag.hbs`         - Used for tag archives
- `gallery.hbs`     - Use for the Gallery
- `author.hbs`      - Used for author archives
- `routes.yml`      - custom routing
# Development

As with the original London theme styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
$ yarn install
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
$ yarn zip
```

# PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- Variables - Simple pure CSS variables
- [Color Function](https://github.com/postcss/postcss-color-function)


# Copyright & License

Copyright (c) 2013-2019 Ghost Foundation
Copyright (c) 2020 Tomas Frydrych
Released under the [MIT license](LICENSE).
