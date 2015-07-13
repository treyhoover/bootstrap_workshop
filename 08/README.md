# Part 8

### Objectives
* Add the full-height cover section
```
<section class="main-banner">
    <div class="banner-text text-center">
        <h1 class="logo">Strainy Mood</h1>
        <h4 class="tagline">Office stress on demand.</h4>

        <ul class="social list-inline text-center">
            <li><a target="_blank" href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a target="_blank" href="#"><i class="fa fa-facebook-official"></i></a></li>
        </ul>

        <i class="sound-player fa fa-volume-up"></i>

        <p class="featured-music text-center">Today's music: <a target="_blank"
                    href="https://www.youtube.com/watch?v=r_bGRVMD41A">The Printer Jams</a></p>
    </div>
</section>
```
* With some custom styles
```
.main-banner {
    background: url(../img/strainymood.jpg) no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    min-height: 100vh;
}

.main-banner>.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    font-family: 'Marcellus', serif;
    color: white;
}

.main-banner>.banner-text .logo {
    font-family: 'Marcellus SC', serif;
    font-size: 80px;
    line-height: 80px;
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 20px;
    text-shadow: 2px 2px 6px #000;
}

.main-banner .social a, .sound-player {
    color: #fff;
    font-size: 34px;
}

.social {
    margin-bottom: 60px;
}

.sound-player {
    display: block;
    width: 40px;
    cursor: pointer;
    margin: 0 auto 30px auto;
}

.featured-music {
    font-size: 20px;
    line-height: 20px;
    white-space: nowrap;
    text-shadow: 2px 2px 6px #000;
}

.featured-music a {
    color: #fff;
    text-decoration: underline;
}
```

### Notes
* Adding `target="_blank"` to an `<a>` tag will make the link open in a new tab
 