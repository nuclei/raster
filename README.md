# Raster.css

> A modern flexbox grid based with css variables (custom properties)

## installatiion
```bash
npm i -S raster.css
```

## usage
```html
<style>
.one-col-element{
  flex-basis: --column-1
}
@media (max-width: 600px){
  .one-col-element{
    flex-basis: --column-16
  }
  :root{
    --columns: 3;
  }
}
</style>
<div class="raster">
  <div class="one-col-element"></div>
  <div class="column-md-3 column-sm-12"></div>
  <div class="column-md-3  column-sm-12"></div>
</div>
```

### Classes
The following classes are available when using `raster.css`:

#### Raster
The `.raster` class is the main class that needs to be placed on the container around the grid. (You may also add the css to a container manually). The following aliases are available by default: `.raster`, `.o-raster`, `.grid`, `.row`.

```css
.raster, .o-raster {
  display: flex;
  flex-direction: row;
}
```


#### Columns
The column classes are used on the actual elements in the grid. Columns are available for 5 different sizes: `xs`,`sm`,`md`,`lg`,`xl`. Those are available from 1 to 16 (if you set your `--columns` to anything below `16` you can only use the classes up to your `--columns` number).

```css
.column-xs-1, .o-column--xs-1{ … }
.column-sm-1, .o-column--sm-1{ … }
.column-md-1, .o-column--md-1{ … }
.column-lg-1, .o-column--lg-1{ … }
.column-xl-1, .o-column--xl-1{ … }
```

##### Auto
Additionally a `.column-md-auto / .o-column--md-auto` class is available for all sizes. Items with this class will adjust to the space available.

#### Offsets
Like column classes, offset classes are used on the columns and are available for 5 different sizes: `xs`,`sm`,`md`,`lg`,`xl`.

```css
.offset-xs-1, .o-column--offset-xs-1{ … }
.offset-sm-1, .o-column--offset-sm-1{ … }
.offset-md-1, .o-column--offset-md-1{ … }
.offset-lg-1, .o-column--offset-lg-1{ … }
.offset-xl-1, .o-column--offset-xl-1{ … }
```

There is also an offset class for all sizes to reset the offset to `0`, e.g. `.offset-sm-0, .o-column--offset-sm-0`.

#### Rows
By default you do not need to worry about rows. If you fill up an entire row, the items will simply wrap to the next line.

However if you want to create rows, maybe because you are using `auto` columns or you do not want to fill an entire row, you are free to use the main `.raster` class or any of its aliases on many containers to create rows.

```html
<div class="raster">
  <div class="column-md-3 column-sm-12">Row 1</div>
  <div class="column-md-3  column-sm-12"></div>
</div>
<div class="raster">
  <div class="column-md-3 column-sm-12">Row 2</div>
  <div class="column-md-3  column-sm-12"></div>
</div>
```

#### Alignment
To control the alignment within the grid, the following classes are available for you in `xs`,`sm`,`md`,`lg`,`xl`.
```css
.align-md-left, .o-raster--md-left{ … }
.align-md-center, .o-raster--md-center{ … }
.align-md-right, .o-raster--md-right{ … }
.align-md-top, .o-raster--md-top{ … }
.align-md-middle, .o-raster--md-middle{ … }
.align-md-bottom, .o-raster--md-bottom{ … }
```

#### Order
Sometimes you need to move an item to the start or end on a certain breakpoint. To make this easy for you, we have the `.order` classes, available in all sizes: `xs`,`sm`,`md`,`lg`,`xl`.

```css
.order-md-first, .o-column--md-first { order: -1; }
.order-md-last, .o-column--md-last{ order: 100; }
```

### Variables
Available column variables:
```css
:root{
  --column-1: calc( ( 100% / var(--columns) ) * 1);
  --column-2: calc( ( 100% / var(--columns) ) * 2);
  --column-3: calc( ( 100% / var(--columns) ) * 3);
  --column-4: calc( ( 100% / var(--columns) ) * 4);
  --column-5: calc( ( 100% / var(--columns) ) * 5);
  --column-6: calc( ( 100% / var(--columns) ) * 6);
  --column-7: calc( ( 100% / var(--columns) ) * 7);
  --column-8: calc( ( 100% / var(--columns) ) * 8);
  --column-9: calc( ( 100% / var(--columns) ) * 9);
  --column-10: calc( ( 100% / var(--columns) ) * 10);
  --column-11: calc( ( 100% / var(--columns) ) * 11);
  --column-12: calc( ( 100% / var(--columns) ) * 12);
  --column-13: calc( ( 100% / var(--columns) ) * 13);
  --column-14: calc( ( 100% / var(--columns) ) * 14);
  --column-15: calc( ( 100% / var(--columns) ) * 15);
  --column-16: calc( ( 100% / var(--columns) ) * 16);
}
```

Variables available for customization:
```css
:root{
  --columns: 16;
  --gutter: 10px;
  --outer-gutter: var(--gutter);
}
```

## Build it yourself
If you want to customize the grid, you can build it yourself. To do so, you need to get the repo and run `npm install` to download all dependencies.

Now you can run the npm build script:

```bash
# note the -- after build, needed to pass the arguments to the underlying node script
npm run build -- --xs=400px --sm=800px --lg=1200px --xl=1500px --prefix=o-column --raster=o-raster --gutter=10px --columns=16
```
