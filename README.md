# centralize.js
A simple JavaScript library to help you centralize content in the center of your device's screen or HTML element/container.

## NPM
You can install directly via NPM to your project folder.
```
npm install centralize-js
```

## CDN
The CDN is updated after the release is made public. Always, check the GitHub page for the latest release.
<ul>
  <li>
    <a href="https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.css">
      https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.css
    </a>
  </li>
  <li>
    <a href="https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.js">
      https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.js
    </a>
  </li>
  <li>
    <a href="https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.min.css">
      https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.min.css
    </a>
  </li>
  <li>
    <a href="https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.min.js">
      https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.min.js
    </a>
  </li>
</ul> 

### Usage
The "**unim**" class is ideal for use on images that should appear uniform (same width & height). Very useful for most websites, especially when you can't control the kind of image the user may or may not upload to his/her site.

### Requirements
jQuery.js

#### How To Use
The **unim, unim-square, unim-circle, unim-landscape, unim-portrait, unim-diamond** classes provide a wide variety of styling for you to choose from. By default the images take a 100% of their parent's width when the **unim** class is applied. Here's a sample below...
```
<!DOCTYPE html>
<html>
<head>
  <link href="centralize.css" rel="stylesheet" type="text/css"/>
  <script src="centralize.js" type="text/javascript"></script>
</head>

<body>
  <section class="centralize">
    You are centralized!!!
  </section>
</body>
</html>
```
