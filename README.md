## WIP! DON'T USE

# ember-anime-helpers
Ember CSS and hbs based animation / transition helpers. Built around the idea you, as the developer, should be specifying your animations / transitions exclusively in css and merely declaring their usage in hbs.

## Desired API
```scss
.some-component {
  transition-property: width;
  transition-duration: 500ms;
  transition-timing-function: ease-in;

  width: 250px;

  &--animating {
    width: 500px;
  }
}
```

Using the `(anime-gen)` helper
```handlebars
{{#some-component 
  class=(anime-gen 
    someGenerator 
    onFinish=(action 'doSomething'))}}
  <span>Whatever</span>
{{/some-component}}
```

Using the `(anime-class)` helper
```handlebars
{{some-component 
  class=(anime-class 
    'some-component--animating' 
    onFinish=(action 'whatever'))}}
```

Using the `{{anime-overflow-scroll}}` tagless component
```scss
.movie-horizontal-scroll-container {
  overflow-x: scroll;
  max-width: 250px;
}
```

```handelbars
<div class='movie-horizontal-scroll-container'>
  {{anime-overflow-scroll 
    target='.movie-horizontal-scroll-container'
    scrollLeft=scrollLeftPosition
    timingFunction=someFunction
    duration=500}}
  {{#each movies as |movie|}}
    {{movie-preview-card movie=movie}}
  {{/each}}
</div>
```

## Implementations
```handlebars
{{#let (hash isAnimating=true class='something') as |anime|}}
  
{{/let}}
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-anime-helper`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
