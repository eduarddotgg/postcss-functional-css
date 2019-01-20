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
      fontSize: [12, 14, 16, 18, 24, 32, 48],
      fontWeight: ['400', '500', '600', '700'], 
      lineHeight: [16, 18, 20, 22, 28, 36, 52],
      margin: [4, 8, 16, 24],
      objectFit: true,
      opacity: {
        increment: 10
      },
      padding: [4, 8, 16, 24],
      position: true,
      textSize: [
        {
          fontSize: 14,
          lineHeight: 20
        },
        {
          fontSize: 16,
          lineHeight: 20
        },
        {
          fontSize: 24,
          lineHeight: 28
        }
      ],
      textAlignment: true,
      visibility: true,
      zIndex: {
        increment: 1,
        limit: 10
      }
    }
  })
])
```

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
`features.dispaly` - `true`|`false` (default: `true`)
___  
`features.float` - `true`|`false` (default: `true`)
___  
`features.fontSize` - `Array`|`false` (default: `[12, 14, 16, 18, 24, 32, 48]`)
```
features: {
  fontSize: [12, 14, 16, 18, 24, 32, 48]
}
```
___  
`features.fontWeight` - `Array`|`false` (default: `[400, 500, 600, 700]`)
```
features: {
  fontWeignt: [400, 500, 600]
}
```
___ 
`features.margin` - `Array`|`false`
```
features: {
  margin: {
    top: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
    right: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
    bottom: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
    left: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120]
  }
}
```
___  
`features.lineHeight` - `Array`|`false` (default: `[16, 18, 20, 22, 28, 36, 52]`)
```
features: {
  lineHeight: [16, 18, 20, 22, 28, 36, 52]
}
```
___ 
`features.objectFit` - `Object`|`false` (default: `true`)
___ 
`features.opacity` - `Object`|`false` (default: `increment: 10`)
```
features: {
  opacity: {
    increment: 10
  }
}
```
___
`features.padding` - `Array`|`false`
```
features: {
  padding: {
    top: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
    right: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
    bottom: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
    left: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120]
  }
}
``` 
___
`features.textAlignment` - `true`|`false` (default: `true`)
___
`features.textSize` - `Array`|`false`
```
features.textSize: [
  {
    fontSize: 14,
    lineHeight: 20
  },
  {
    fontSize: 16,
    lineHeight: 20
  },
  {
    fontSize: 24,
    lineHeight: 28
  }
]
```
___  
`features.visibility` - `true`|`false` (default: `true`)
___  
`features.zIndex` - `Object`|`false`
```
features: {
  zIndex: {
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
