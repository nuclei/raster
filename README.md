# Raster.css

> A modern flexbox grid based with css variables (custom properties)

## installatiion
```
npm i -S raster.css
```

## usage
```html
<div class="raster">
  <div class="column-md-3 column-sm-12"></div>
  <div class="column-md-3  column-sm-12"></div>
</div>
```

## Build yourself
If you want to customize the grid, you can build it yourself. To do so, you need to get the repo and run `npm install` to download all dependencies.

Now you can run the npm build script:

```
# note the -- after build, needed to pass the arguments to the underlying node script
npm run build -- --xs=400px --sm=600px --lg=1200px --xl=1500px --prefix=o-column --raster=o-raster --gutter=10px --columns=16
```
