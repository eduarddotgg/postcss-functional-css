# PostCSS Functional CSS
<img align="right" width="108" height="108" title="Philosopher’s stone, logo of PostCSS" src="http://postcss.github.io/postcss/logo.svg" hspace="20">
PostCSS Functional CSS is PostCSS Plugin that will help to generate functional css.

## Why
Why not? Just for fun! Because it's possible with PostCSS. Because it's hype. Just because.

Main reason why I decided to create this plugin is because with it's help I would like to create functional css faster.
At the same time I would like to have ability to adjust css anytime with ease and individually for each project.


## Getting Started
```
npm i postcss postcss-functional-css
```

```js

const config = require('postcss-functional-css-config');

postcss([
  require('postcss-functional-css')(config)
])
```

Config Example:
```$js
module.exports = {
  globalStyles: true,
  cssModules: false,
  mediaQueries: [
    {
      prefix: 'sm',
      prefixSeparator: '-',
      params: '(min-width: 480px)'
    },
    {
      prefix: 'md',
      prefixSeparator: '-',
      params: '(min-width: 640px)'
    },
    {
      prefix: 'lg',
      prefixSeparator: '-',
      params: '(min-width: 960px)'
    },
    {
      prefix: 'xl',
      prefixSeparator: '-',
      params: '(min-width: 1280px)'
    }
  ],
  features: {
    alignContent: {
      className: 'content'
    },
    alignItems: {
      className: 'items'
    },
    alignSelf: {
      className: 'self'
    },
    display: {
      className: 'd'
    },
    flex: {
      className: 'flex'
    },
    flexDirection: {
      className: 'direction'
    },
    flexWrap: {
      className: 'flex'
    },
    float: {
      className: 'float'
    },
    fontSize: {
      className: 'fs',
      values: [12, 14, 16, 18, 24, 32, 48],
      unit: 'px'
    },
    fontWeight: {
      className: 'fw',
      values: [400, 500, 600, 700]
    },
    lineHeight: {
      className: 'ln',
      values: [16, 18, 20, 22, 28, 36, 52],
      unit: 'px'
    },
    height: {
      className: 'h',
      values: ['auto', 4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    },
    justifyContent: {
      className: 'justify'
    },
    margin: {
      all: {
        className: 'm',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      x: {
        className: 'mx',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      y: {
        className: 'my',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      top: {
        className: 'mt',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      right: {
        className: 'mr',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      bottom: {
        className: 'mb',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      left: {
        className: 'ml',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      }
    },
    minHeight: {
      className: 'minh',
      values: [0, 4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    },
    maxHeight: {
      className: 'maxh',
      values: [0, 4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    },
    objectFit: {
      className: 'object-fit'
    },
    opacity: {
      className: 'o',
      increment: 10
    },
    padding: {
      all: {
        className: 'p',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      x: {
        className: 'px',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      y: {
        className: 'py',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      top: {
        className: 'pt',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      right: {
        className: 'pr',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      bottom: {
        className: 'pb',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      left: {
        className: 'pl',
        values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      }
    },
    position: {
      className: 'position'
    },
    textAlignment: {
      className: 'text-alignment'
    },
    textSize: {
      className: 'fs',
      fontSizeUnit: 'px',
      lineHeightUnit: 'px',
      values: [
        {
          fontSize: 14,
          lineHeight: 20
        },
        {
          fontSize: 18,
          lineHeight: 24
        }
      ]
    },
    textTransform: {
      className: 'text-transform'
    },
    visibility: true,
    zIndex: {
      className: 'z',
      increment: 1,
      limit: 10
    }
  }
};

```
Add comment to your css file:
```
/* postcss-functional-css */
```

#### Split CSS
It's possible to split css by adding comments for a specific feature:
```
/* postcss-functional-css-align-content */
/* postcss-functional-css-align-items */
/* postcss-functional-css-align-self */
/* postcss-functional-css-display */
/* postcss-functional-css-flex */
/* postcss-functional-css-flex-direction */
/* postcss-functional-css-flex-wrap */
/* postcss-functional-css-float */
/* postcss-functional-css-font-size */
/* postcss-functional-css-font-weight */
/* postcss-functional-css-line-height */
/* postcss-functional-css-height */
/* postcss-functional-css-justify-content */
/* postcss-functional-css-max-height */
/* postcss-functional-css-min-height */
/* postcss-functional-css-object-fit */
/* postcss-functional-css-opacity */
/* postcss-functional-css-padding */
/* postcss-functional-css-position */
/* postcss-functional-css-text-alignment */
/* postcss-functional-css-text-size */
/* postcss-functional-css-text-transform */
/* postcss-functional-css-visibility */
/* postcss-functional-css-z-index */
```

## Config
`globalStyle` - enable/disable global styles.

`cssModules` - generates class names compatible with css modules

`mediaQueries` - a list of media queries.

`mediaQuery.prefix` - current media query's prefix that will be added to the class name.
`mediaQuery.prefixSeparator` - separator between media query prefix and feature class name.
`mediaQuery.params` - media query params (valid css media query value).

`features[any]` - (Boolean | Object).
`features[any].className` - (String) specify custom base class name.
If not defined default base class name will be generated - `.display-none { display: none; }`.
If empty, base class name won't be generated for example `features.display.className = ''` - `.none { display: none; }`.

`features[margin|padding][direction].className` - (String) specify custom base class name.
`features[margin|padding][direction].values` - (Array) list of desired values.
`features[margin|padding][direction].unit` - (String) unit.

`features[fontSize|lineHeight|height|maxHeight|minHeight].className` - (String) specify custom base class name.
`features[fontSize|lineHeight|height|maxHeight|minHeight].values` - (Array) list of desired values.
`features[fontSize|lineHeight|height|maxHeight|minHeight].unit` - (String) unit.

`features[fontWeight].className` - (String) specify custom base class name.
`features[fontWeight].values` - (Array) list of desired values.

`features[textSize].className` - (String) specify custom base class name.
`features[textSize].fontSizeUnit` - (String) font size custom unit.
`features[textSize].lineHeightUnit` - (String) font size custom unit.
`features[textSize].values` - (Array) array of objects.

`features[opacity].className` - (String) specify custom base class name.
`features[opacity].increment` - (Number) increment number.

`features[zIndex].className` - (String) specify custom base class name.
`features[zIndex].increment` - (Number) increment number.
`features[zIndex].limit` - (Number) z-index max value.
