# Tokyo West Middle/Elementary

Built using [Harp](http://harpjs.com/docs/), a JS based static site generator.

## Dev Dependecies

* [harpjs.com](https://www.npmjs.com/get-npm)
* [Susy](http://oddbird.net/susy/docs/index.html)
* [Breakpoint Sass](http://breakpoint-sass.com/)
* [Gulp](https://gulpjs.com)

### Languages and Tools
With this project, we're using some specific features that Harp provides, in-particular:
* SCSS
* EJS
* Metadata stored on `.json` files
* Partials
It's worth catching up on the [Harp Docs](http://harpjs.com/docs/) in these subjects.

## Quick Setup
* Install NPM: https://www.npmjs.com/get-npm
* Install Harp: `sudo npm install -g harp`
* Clone repo
* `cd` into repo
* run 'npm install' to install dependecies
* Run Server: `harp server`
* Visit `http://localhost:9000/` in your chosen browser
* Profit!

## File structure
A brief overview of file structure, and some of the files you'll need to edit.
```
aspire-magazine/
  ├ harp.json 
  ├ index.ejs
  └ public/
    └ articles/
        ├ _data.json
        ├ article-one.ejs
        ├ article-two.ejs
        └ etc
    └ assets/
        └ images/
            ├ article-one/
            └ article-two/
        ├ javascripts/
        └ stylesheets/
                ├ base/
                ├ modules/
                ├ pages/
                ├ templates/
                ├ vendor/
                └ aplication.scss
        ├ 404.ejs
        ├ _data.json
        ├ _icons.ejs
        ├ _layout.ejs
        ├ _nav.ejs
        └ index.ejs
```

To keep things organised, there are few rules.

* All icons kept in the `/public/assets/images/icons` folder and made as a sprite (details bellow)
* Each article in `/public/articles` has a corresponding folder in images: e.g `/public/articles/article-one.ejs` and `/public/assets/images/article-one/hero.png`
* Images for general articles follow the patern `image-1.jpg`, `image-2.jpg`, `image-3.jpg` etc
* Images for lists follow the patern `item-1.jpg`, `item-3.jpg`, `item-6.jpg` etc
* Hero images are always called `hero.jpg`.

This way we can use metadata variables to make development quicker.

## Development

### SCSS and JS
Harp automaticaly compiles SCSS and JS files. As long as `harp server` is running, they should just work.

#### Utilitiy Classes
There are some basic utilitiy classes added to help speed development, mostly for colour blocks.

* `background--<colourname>` gives that element the backgorund colour specified
* * `background--opacity--<colourname>` gives that element the backgorund colour specified, at 90% transparency
* `text--<colourname>` gives that element a `color` atribute of the colour specified
* `headings--<colourname>` gives that elements children, which are headings, the spcified colour
* `svg--<colourname>` gives that elements children, which are svgs, the spcified colour fill

### SVG Icons
We're using a gulp task to generate a sprite of all the icons in the `public/assets/images/icons` folder. This task will make the sprite at `/public/assets/images/symbol/svg/sprite.symbol.svg`, which you'll need to copy and paste by hand into the `/public/_icons.ejs` partial.

The html file generated to view all assets, and retreive the `<use>` tag for each at `/public/assets/images/symbol/sprite.symbol.html`.

### Content 
For the ease of copy edits and changes, all copy for articles is stored in the `/public/articles/_data.json` file. 
For whatever reason, any key used in this file must first live in `/harp.json` as well, hence its long list of empty vars.

To display the content, us EJS template tags, e.g `<%- heroTitle %>`. The `-` is important as it renders HTML correctly.

We're also using this Metadata to build page `<title>`, `<description>` classes on `<body>` and social sharing tags.

## Deployment
* Run: `harp compile` and verify changes are under `www` folder
* Run: `gulp js` (might be optional)

### Firebase
* npm install firebase
  `npm install -g firebase-tools`
* login to firebase
  `firebase login --no-localhost`
  * click on the url provided and log in
    user: gsa-system@gsacademy.com
  * paste authorization code provided to log in  
* Deploy contents of `www` to chosen server 
  `firebase deploy -p www --only hosting`
 
* Profit!
