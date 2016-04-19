Vertical and horizontal aligning in css can be tricky.

```css
/* vertical align */
.valign {
  position: relative;
  /* move the element down half of its container */
  top: 50%;
  /* now, the top of the element is dead center */
  /* move the element back up half of its own height */
  transform: translateY(-50%);
}

/* horizontal align */
.halign {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

/* OR another horizontal align */
.halign {
  margin: 0 auto;
}
```
