module.exports = {
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
    },
    {
      prefix: 'xxl',
      prefixSeparator: '-',
      params: '(min-width: 1440px)'
    }
  ],
  globalStyles: true,
  cssModules: false,
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
