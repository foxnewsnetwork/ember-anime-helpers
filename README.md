## WIP! DON'T USE

# ember-anime-helpers



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


```handlebars

{{#some-component class=(anime-on-change
  someProperty
  'some-component--animating')}}
  <span>Whatever</span>
{{/some-component}}
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
