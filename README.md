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
postcss([
  require('postcss-functional-css')({
    mediaQueries: [
      {
        prefix: 'sm',
        prefixSeparator: '\\:',
        params: '(min-width: 640px)'
      }
    ],
    globalStyles: true,
    features: {
      display: true,
      float: true,
      fontSize: {
        className: 'fs',
        values: [12, 14, 16, 18, 24, 32, 48],
        unit: 'px'
      },
      fontWeight: {
        className: 'fw',
        values: [400, 500, 600, 700]
      },
      height: {
        className: 'h',
        values: ['auto', 4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        unit: 'px'
      },
      lineHeight: {
        className: 'ln',
        values: [16, 18, 20, 22, 28, 36, 52],
        unit: 'px'
      },
      margin: {
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
      objectFit: true,
      opacity: {
        className: 'o',
        increment: 10
      },
      padding: {
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
      position: true,
      textAlignment: true,
      textSize: {
        className: 'ts',
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
      textTransform: true,
      visibility: true,
      zIndex: {
        className: 'z',
        increment: 1,
        limit: 10
      }
    }
  })
])
```

Add comment to your css file:
```
/* postcss-functional-css */
```
This will prevent from duplicate css in some bundlers like Parcel or Webpack.
CSS will be ONLY appended if comment exists. 


## Warning
Order of media queries is important. It is also important to use valid css values for properties like font-weight.

## Config 
`mediaQueries` - Array
```js
{
  prefix: 'sm', // css class prefix
  prefixSeparator: '\\:', // css class separator
  params: '(min-width: 640px)' // media query param (can be any css valid media query param)
}
```
___
`features.dispaly` - `true`|`false`
___  
`features.float` - `true`|`false`
___  
`features.fontSize` - `Object`|`false`
```
features: {
  fontSize: {
    className: 'fs',
    values: [12, 14, 16, 18, 24, 32, 48],
    unit: 'px'
  }
}
```
___  
`features.fontWeight` - `Object`|`false`
```
features: {
  fontWeignt: {
    className: 'fw',
    values: [400, 500, 600, 700]
  }
}
```
___  
`features.lineHeight` - `Object`|`false`
```
features: {
  lineHeight: {
    className: 'ln',
    values: [16, 18, 20, 22, 28, 36, 52],
    unit: 'px'
  }
}
```
___ 
`features.margin` - `Array`|`false` or `false` for each direction
```
features: {
  margin: {
    top: {
      className: 'm-t',
      values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    },
    right: {
      className: 'm-r',
      values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    },
    bottom: {
      className: 'm-b',
      values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    },
    left: {
      className: 'm-l',
      values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    }
  }
}
```
___ 
`features.objectFit` - `Object`|`false` (default: `true`)
___ 
`features.opacity` - `Object`|`false` (default: `increment: 10`)
```
features: {
  opacity: {
    className: 'o',
    increment: 10
  }
}
```
___
`features.padding` - `Object`|`false` or `false` for each direction
```
features: {
  padding: {
    top: {
      className: 'p-t',
      values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    },
    right: {
      className: 'p-r',
      values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    },
    bottom: {
      className: 'p-b',
      values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    },
    left: {
      className: 'p-l',
      values: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
      unit: 'px'
    }
  }
}
``` 
___
`features.textAlignment` - `true`|`false` (default: `true`)
___
`features.textSize` - `Object`|`false`
```
features: {
  textSize: {
    className: 'ts',
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
  }
}
```
___  
`features.visibility` - `true`|`false` (default: `true`)
___  
`features.zIndex` - `Object`|`false`
```
features: {
  zIndex: {
    className: 'z',
    increment: 1,
    limit: 10
  }
}
```  


## Features

### Display
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .block                            | display: block;                                    |
| .flex                             | display: flex;                                     |
| .grid                             | display: grid;                                     |
| .hidden                           | display: hidden;                                   |
| .inline                           | display: inline;                                   |
| .inline-block                     | display: inline-block;                             |
| .table                            | display: table;                                    |
| .table-row                        | display: table-row;                                |
| .table-cell                       | display: table-cell;                               |

##### Responsive
```
  .${prefix}${prefixSeparator}block
  
  <div class="sm:hidden lg:block"></div>
```


### Floats
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .float-left                       | float: left;                                       |
| .float-none                       | float: none;                                       |
| .float-right                      | float: right;                                      |

##### Responsive
```
  .${prefix}${prefixSeparator}float-left
  
  <div class="sm:float-none lg:float-left"></div>
```

#### Font Size
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .font-size-${fontSize}            | font-size: ${fontSize};                            |

##### Responsive
```
  .${prefix}${prefixSeparator}font-size-${fontSize}
  
  <div class="sm:font-size-14 lg:font-size-24"></div>
```

#### Font Weight
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .font-weight-${fontWeight}       | font-weight: ${fontWeight};                         |

##### Responsive
```
  .${prefix}${prefixSeparator}font-weight-${fontWeifght}
  
  <div class="sm:font-weight-400 lg:font-weight-700"></div>
```

#### Line Height
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .line-height-${lineHeight}        | line-height: ${lineHeight};                        |

##### Responsive
```
  .${prefix}${prefixSeparator}line-height-${lineHeight}
  
  <div class="sm:line-height-18 lg:line-height-28"></div>
```

#### Margin
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .margin-top-${increment}          | margin-top: ${increment}px;                        |
| .margin-right-${increment}        | margin-right: ${increment}px;                      |
| .margin-bottom-${increment}       | margin-bottom: ${increment}px;                     |
| .margin-left-${increment}         | margin-left: ${increment}px;                       |

##### Responsive
```
  .${prefix}${prefixSeparator}margin-bottom-${increment}
  
  <div class="sm:margin-bottom-12 lg:margin-bottom-24"></div>
```

#### Opacity
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .opacity-${increment}             | opacity: ${increment};                             |

##### Responsive
```
  .${prefix}${prefixSeparator}opacity-${increment}
  
  <div class="sm:opacity-40 lg:opacity-80"></div>
```

#### Padding
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .padding-top-${increment}          | padding-top: ${increment}px;                      |
| .padding-right-${increment}        | padding-right: ${increment}px;                    |
| .padding-bottom-${increment}       | padding-bottom: ${increment}px;                   |
| .padding-left-${increment}         | padding-left: ${increment}px;                     |

##### Responsive
```
  .${prefix}${prefixSeparator}padding-bottom-${increment}
  
  <div class="sm:padding-bottom-12 lg:padding-bottom-24"></div>
```

#### Position
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .absolute                         | position: absolute;                                |
| .fixed                            | position: fixed;                                   |
| .relative                         | position: relative;                                |
| .static                           | position: static;                                  |
| .sticky                           | position: sticky;                                  |

##### Responsive
```
  .${prefix}${prefixSeparator}relative
  
  <div class="sm:relative lg:fixed"></div>
```

#### Text Alignment
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .text-align-center                | text-align: center;                                |
| .text-align-justify               | text-align: justify;                               |
| .text-align-left                  | text-align: left;                                  |
| .text-align-right                 | text-align: right;                                 |


##### Responsive
```
  .${prefix}${prefixSeparator}text-align-left
  
  <div class="sm:text-align-left lg:text-align-center"></div>
```

#### Text Size
| Class                                 | Properties                                         |
|:--------------------------------------|:---------------------------------------------------|
| .text-size-${fontSize}-${line-height} | font-size: ${fontSize}; line-height: ${lineHeight} |

##### Responsive
```
  .${prefix}${prefixSeparator}text-size-${fontSize}-${line-height}
  
  <div class="sm:font-size-14-18 lg:font-size-24-28"></div>
```

#### Visibility
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .visible                          | visibility: visible;                               |
| .invisible                        | visibility: hidden;                                |


##### Responsive
```
  .${prefix}${prefixSeparator}visible
  
  <div class="sm:invisible lg:visible"></div>
```

#### Z-index
| Class                             | Properties                                         |
|:----------------------------------|:---------------------------------------------------|
| .z-index-${increment}             | z-index: ${increment};                             |

##### Responsive
```
  .${prefix}${prefixSeparator}z-index-${increment}
  
  <div class="sm:z-index-1 lg:opacity-40"></div>
```

## TODO
- better class name management (shorter, custom, etc)
- tests
- automatically generate margins
- automatically generate padding
- grid?
- more features
- more units support
