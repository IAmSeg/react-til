### Declaring variables in PostCSS with cssnext

```css
/* Declare a root element */
:root {
  /* mainColor is now a variable */
  --mainColor: #43ac5a;
}

/* Use your variable */
h1 {
  color: var(--mainColor);
}
```
