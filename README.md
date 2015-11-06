## Bespectacled Bear PostCSS

This is an empty Grunt starter project, preloaded with goodies like PostCSS, Babel, Sass, livereload, etc.  If you already have Grunt, there's very little setup.  It's just an empty web project, ready to go.

Demo of just the dev (uncompressed) folder pushed live: coming soon


Demo of just the dist (compressed for production) folder pushed live: coming soon

![alt text](https://raw.githubusercontent.com/mcdermottsolutions/bespectacled-bear/master/dist/img/bespectacled-bear.png "Bespectacled Bear Logo")

## Motivation

Just looking to start playing with PostCSS.

## Installation

If you don't have have Node, NPM & Grunt installed, install those first.
See https://docs.npmjs.com/getting-started/installing-node & http://gruntjs.com/getting-started

---

Once you have Node, NPM & Grunt installed, do the following to install Bespectacled Bear:

```shell
git clone https://github.com/mcdermottsolutions/bespectacled-bear.git
cd bespectacled-bear
npm install
```
That last line there, npm install, just installs the required node modules specified in package.json.

The project directory structure looks like this:

```
-- dev
   -- css
      - style.css
   -- img
      - bespectacled-bear.png
   -- js
      - script1.js
      - script1.js.map
      - script2.js
      - script2.js.map
   - index.html

-- dist
   -- css
      - style.min.css
   -- img
      - bespectacled-bear.png
   -- js
      - main.min.js
   - index.html

-- src
   -- img
      - bespectacled-bear.png
   -- js
      - script1.es6
      - script2.es6
  -- css
      - style.css
  - index.html

- Gruntfile.js
- package.json
```

The src folder is for working in.  The dev folder is the browser viewable output of the src folder.  The dist folder is the minimized and compressed version of dev - dist is production ready.

---

If you make any changes, you'll want to run
```shell
grunt
````
to recompile the sass, retranspile the js and copy everything from src to dev.

---

If you just want to watch for changes as you work and use livereload, run
```shell
grunt server
````
and everytime you save, it will recompile the sass, retranspile the js, minimize the sass & js and copy everything from src to dev. When you run the command, it will open localhost:9000 in your browser.  You'll need to add the livereload extension to your browser to get livereload working.  http://livereload.com/extensions/

---

If you want to take a peek at the dist (minimized for production) version, run
```shell
grunt serverdist
````

---

When you're ready to make the compressed, minified production version, run
```shell
grunt dist
````
and this will put the production version in the dist folder.  The css file is minified to style.min.css and all js files are combined and minified to main.min.js

---

Let me know if you have any questions or anything.
