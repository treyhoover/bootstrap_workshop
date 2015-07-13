# Part 6

### Objectives
* Add a navbar!
```
<nav id="sticky-nav" class="navbar navbar-inverse" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
</nav>
```
  * Add the header
  ```
  <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Strainy Mood</a>
  </div>
  ```
  * Add our links
  ```
  <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li role="presentation" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
                  Dropdown <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
              </ul>
          </li>
      </ul>
  </div><!-- /.nav-collapse -->
  ```
  * Add a dropdown
  ```
  <li role="presentation" class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
          Dropdown <span class="caret"></span>
      </a>
      <ul class="dropdown-menu" role="menu">
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
      </ul>
  </li>
  ```
  * Wrap navbar contents in a `container`
  
### Notes
* Anything that begins with `data-` is used to control javascript behavior, not styling (in this case, it's collapsing/expanding the navbar)
* `aria-expanded="false"` and  `aria-controls="navbar"` are technically optional, but improve accessibility for screen readers