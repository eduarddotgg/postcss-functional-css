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


  const features = [

  ];

  return css => {
    css.walkComments(comment => {
      if (comment.text === 'postcss-functional-css') {
        if (options.globalStyles) {
          if (options.features.display) {
            comment.parent.append(display({prefix: '', prefixSeparator: ''}, options.globalStyles));
          }

          if (options.features.float) {
            comment.parent.append(float({prefix: '', prefixSeparator: ''}, options.globalStyles));
          }

          if (options.features.fontSize) {
            comment.parent.append(fontSize(options.features.fontSize, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.fontWeight) {
            comment.parent.append(fontWeight(options.features.fontWeight, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.lineHeight) {
            comment.parent.append(lineHeight(options.features.lineHeight, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.margin && options.features.margin.top) {
            comment.parent.append(margin('top', options.features.margin.top, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.margin && options.features.margin.right) {
            comment.parent.append(margin('right', options.features.margin.right, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.margin && options.features.margin.bottom) {
            comment.parent.append(margin('bottom', options.features.margin.bottom, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.margin && options.features.margin.left) {
            comment.parent.append(margin('left', options.features.margin.left, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.objectFit) {
            comment.parent.append(objectFit({prefix: '', prefixSeparator: ''}, options.globalStyles));
          }

          if (options.features.opacity) {
            comment.parent.append(opacity(options.features.opacity, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.padding && options.features.padding.top) {
            comment.parent.append(padding('top', options.features.padding.top, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.padding && options.features.padding.right) {
            comment.parent.append(padding('right', options.features.padding.right, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.padding && options.features.padding.bottom) {
            comment.parent.append(padding('bottom', options.features.padding.bottom, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.padding && options.features.padding.left) {
            comment.parent.append(padding('left', options.features.padding.left, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.position) {
            comment.parent.append(position({prefix: '', prefixSeparator: ''}, options.globalStyles));
          }

          if (options.features.textAlignment) {
            comment.parent.append(textAlignment({prefix: '', prefixSeparator: ''}, options.globalStyles));
          }

          if (options.features.textSize) {
            comment.parent.append(textSize(options.features.textSize, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }

          if (options.features.visibility) {
            comment.parent.append(visibility({prefix: '', prefixSeparator: ''}, options.globalStyles));
          }

          if (options.features.zIndex) {
            comment.parent.append(zIndex(options.features.zIndex, {
              prefix: '',
              prefixSeparator: ''
            }, options.globalStyles));
          }
        }


        options.mediaQueries.forEach(media => {
          const atRule = postcss.atRule({
            name: 'media',
            params: media.params
          });

          if (options.features.display) {
            atRule.append(display(media));
          }

          if (options.features.float) {
            atRule.append(float(media));
          }

          if (options.features.fontSize) {
            atRule.append(fontSize(options.features.fontSize, media));
          }

          if (options.features.fontWeight) {
            atRule.append(fontWeight(options.features.fontWeight, media));
          }

          if (options.features.lineHeight) {
            atRule.append(lineHeight(options.features.lineHeight, media));
          }

          if (options.features.margin && options.features.margin.top) {
            atRule.append(margin('top', options.features.margin.top, media));
          }

          if (options.features.margin && options.features.margin.right) {
            atRule.append(margin('right', options.features.margin.right, media));
          }

          if (options.features.margin && options.features.margin.bottom) {
            atRule.append(margin('bottom', options.features.margin.bottom, media));
          }

          if (options.features.margin && options.features.margin.left) {
            atRule.append(margin('left', options.features.margin.left, media));
          }

          if (options.features.objectFit) {
            atRule.append(objectFit(media));
          }

          if (options.features.opacity) {
            atRule.append(opacity(options.features.opacity, media));
          }

          if (options.features.padding && options.features.padding.top) {
            atRule.append(padding('top', options.features.padding.top, media));
          }

          if (options.features.padding && options.features.padding.right) {
            atRule.append(padding('right', options.features.padding.right, media));
          }

          if (options.features.padding && options.features.padding.bottom) {
            atRule.append(padding('bottom', options.features.padding.bottom, media));
          }

          if (options.features.padding && options.features.padding.left) {
            atRule.append(padding('left', options.features.padding.left, media));
          }

          if (options.features.position) {
            atRule.append(position(media));
          }

          if (options.features.textAlignment) {
            atRule.append(textAlignment(media));
          }

          if (options.features.textSize) {
            atRule.append(textSize(options.features.textSize, media));
          }

          if (options.features.visibility) {
            atRule.append(visibility(media));
          }

          if (options.features.zIndex) {
            atRule.append(zIndex(options.features.zIndex, media));
          }

          comment.parent.append(atRule);
        });
      }
    });
  }
});
