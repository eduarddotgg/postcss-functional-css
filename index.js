const postcss = require('postcss');

const display = require('./lib/display');
const float = require('./lib/float');
const fontSize = require('./lib/font-size');
const fontWeight = require('./lib/font-weight');
const lineHeight = require('./lib/line-height');
const margin = require('./lib/margin');
const objectFit = require('./lib/object-fit');
const opacity = require('./lib/opacity');
const padding = require('./lib/padding');
const position = require('./lib/position');
const textAlignment = require('./lib/text-alignment');
const textSize = require('./lib/text-size');
const visibility = require('./lib/visibility');
const zIndex = require('./lib/z-index');

module.exports = postcss.plugin('postcss-functional-css',  (opts) => {
  const options = Object.assign({
    mediaQueries: [],
    globalStyles: true,
    features: {
      display: true,
      float: true,
      fontSize: [12, 14, 16, 18, 24, 32, 48],
      fontWeight: [400, 500, 600, 700],
      lineHeight: [16, 18, 20, 22, 28, 36, 52],
      margin: {
        top: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        right: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        bottom: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        left: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120]
      },
      objectFit: true,
      opacity: {
        increment: 10
      },
      padding: {
        top: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        right: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        bottom: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120],
        left: [4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96, 120]
      },
      position: true,
      textAlignment: true,
      textSize: [
        {
          fontSize: 14,
          lineHeight: 20
        }
      ],
      visibility: true,
      zIndex: {
        increment: 1,
        limit: 10
      }
    }
  }, opts);

  return root => {
    options.mediaQueries.forEach(item => {
      root.append({
        name: 'media', params: item.params
      });
    });


    if (options.globalStyles && options.features.display) {
      display(root, {prefix: '', prefixSeparator: ''});
    }

    if (options.globalStyles && options.features.float) {
      float(root, {prefix: '', prefixSeparator: ''});
    }

    if (options.globalStyles && options.features.fontSize) {
      fontSize(root, {prefix: '', prefixSeparator: ''}, options.features.fontSize);
    }

    if (options.globalStyles && options.features.fontWeight) {
      fontWeight(root, {prefix: '', prefixSeparator: ''}, options.features.fontWeight);
    }

    if (options.globalStyles && options.features.lineHeight) {
      lineHeight(root, {prefix: '', prefixSeparator: ''}, options.features.lineHeight);
    }

    if (options.globalStyles && options.features.margin) {
      margin(root, {prefix: '', prefixSeparator: ''}, options.features.margin);
    }

    if (options.globalStyles && options.features.objectFit) {
      objectFit(root, {prefix: '', prefixSeparator: ''});
    }

    if (options.globalStyles && options.features.opacity) {
      opacity(root, {prefix: '', prefixSeparator: ''}, options.features.opacity.increment);
    }

    if (options.globalStyles && options.features.padding) {
      padding(root, {prefix: '', prefixSeparator: ''}, options.features.padding);
    }

    if (options.globalStyles && options.features.position) {
      position(root, {prefix: '', prefixSeparator: ''});
    }

    if (options.globalStyles && options.features.textAlignment) {
      textAlignment(root, {prefix: '', prefixSeparator: ''});
    }

    if (options.globalStyles && options.features.textSize) {
      textSize(root, {prefix: '', prefixSeparator: ''}, options.features.textSize);
    }

    if (options.globalStyles && options.features.visibility) {
      visibility(root, {prefix: '', prefixSeparator: ''});
    }

    if (options.globalStyles && options.features.zIndex) {
      zIndex(root, {prefix: '', prefixSeparator: ''}, options.features.zIndex.increment, options.features.zIndex.limit);
    }

    root.walkAtRules(node => {
      options.mediaQueries.forEach(mediaQuery => {
        if (node.type === 'atrule' && node.params === mediaQuery.params) {
          if (options.features.display) {
            display(node, mediaQuery);
          }

          if (options.features.float) {
            float(node, mediaQuery);
          }

          if (options.features.fontSize) {
            fontSize(node, mediaQuery, options.features.fontSize);
          }

          if (options.features.fontWeight) {
            fontWeight(node, mediaQuery, options.features.fontWeight);
          }

          if (options.features.lineHeight) {
            lineHeight(node, mediaQuery, options.features.lineHeight);
          }

          if (options.features.margin) {
            margin(node, mediaQuery, options.features.margin);
          }

          if (options.globalStyles && options.features.objectFit) {
            objectFit(node, mediaQuery);
          }

          if (options.features.opacity) {
            opacity(node, mediaQuery, options.features.opacity.increment);
          }

          if (options.features.padding) {
            padding(node, mediaQuery, options.features.padding);
          }

          if (options.features.position) {
            position(node, mediaQuery);
          }

          if (options.features.textAlignment) {
            textAlignment(node, mediaQuery);
          }

          if (options.features.textSize) {
            textSize(node, mediaQuery, options.features.textSize);
          }

          if (options.features.visibility) {
            visibility(node, mediaQuery);
          }

          if (options.features.zIndex) {
            zIndex(node, mediaQuery, options.features.zIndex.increment, options.features.zIndex.limit);
          }
        }
      });
    })
  }
});
