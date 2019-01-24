module.exports = {
  mediaQueries: [],
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
      className: 'zi',
      increment: 1,
      limit: 10
    }
  }
};
