# Part 7

### Objectives
* Add a footer
```
<footer class="footer text-center">
    <span>&copy; 2015 - Strainy Mood </span>
</footer>
```
 * With some custom styles
 ```
 .footer {
     background-color: #1A1D23;
     padding: 10px;
     color: #ddd;
     font-size: 20px;
 }
 ```
* Let's customize our endorsements as well
```
.endorsements {
    margin: 60px auto 40px auto;
    max-width: 1800px;
}

.endorsements blockquote {
    border: none;
    background-color: #1A1D23;
    color: #ddd;
}

blockquote h1 {
    font-style: italic;
}

blockquote, .blockquote-reverse {
    display: inline-block;
    margin-bottom: 40px;
    padding: 10px 20px;
}

.endorsements blockquote:nth-child(even) {
    float: right;
}
```
* And we can make it responsive
```
@media (max-width: 767px) {
    blockquote h1, blockquote footer {
        font-size: 1em;
        line-height: 1.2em;
    }

    .endorsements blockquote {
        max-width: 85%;
    }
}

@media (min-width: 768px) {
    blockquote h1, blockquote footer {
        font-size: 1.5em;
        line-height: 1.3em;
    }

    .endorsements blockquote {
        max-width: 65%;
    }
}
```
