const postcss = require('postcss');

const features = require('./src/features');
const config = require('./config');

module.exports = postcss.plugin('postcss-functional-css',  (opts) => {
  const options = Object.assign(config, opts);

  return css => {
    css.walkComments(comment => {
      if (comment.text === 'postcss-functional-css-align-content') {
        if (options.globalStyles) {
          features.alignContent(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.alignContent(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-align-items') {
        if (options.globalStyles) {
          features.alignItems(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.alignItems(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-align-self') {
        if (options.globalStyles) {
          features.alignSelf(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.alignSelf(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-display') {
        if (options.globalStyles) {
          features.display(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.display(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-flex') {
        if (options.globalStyles) {
          features.flex(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.flex(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-flex-direction') {
        if (options.globalStyles) {
          features.flexDirection(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.flexDirection(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-flex-wrap') {
        if (options.globalStyles) {
          features.flexWrap(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.flexWrap(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-float') {
        if (options.globalStyles) {
          features.float(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.float(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-font-size') {
        if (options.globalStyles) {
          features.fontSize(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.fontSize(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-font-weight') {
        if (options.globalStyles) {
          features.fontWeight(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.fontWeight(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-line-height') {
        if (options.globalStyles) {
          features.lineHeight(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.lineHeight(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-height') {
        if (options.globalStyles) {
          features.height(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.height(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-justify-content') {
        if (options.globalStyles) {
          features.justifyContent(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.justifyContent(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-margin') {
        if (options.globalStyles) {
          features.margin(comment.parent, options, 'bottom');
          features.margin(comment.parent, options, 'left');
          features.margin(comment.parent, options, 'right');
          features.margin(comment.parent, options, 'top');
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.margin(atRule, options, 'bottom', classNamePrefix);
            features.margin(atRule, options, 'left', classNamePrefix);
            features.margin(atRule, options, 'right', classNamePrefix);
            features.margin(atRule, options, 'top', classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-max-height') {
        if (options.globalStyles) {
          features.maxHeight(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.maxHeight(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-min-height') {
        if (options.globalStyles) {
          features.minHeight(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.minHeight(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-object-fit') {
        if (options.globalStyles) {
          features.objectFit(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.objectFit(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-opacity') {
        if (options.globalStyles) {
          features.opacity(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.opacity(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-padding') {
        if (options.globalStyles) {
          features.padding(comment.parent, options, 'bottom');
          features.padding(comment.parent, options, 'left');
          features.padding(comment.parent, options, 'right');
          features.padding(comment.parent, options, 'top');
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.padding(atRule, options, 'bottom', classNamePrefix);
            features.padding(atRule, options, 'left', classNamePrefix);
            features.padding(atRule, options, 'right', classNamePrefix);
            features.padding(atRule, options, 'top', classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-position') {
        if (options.globalStyles) {
          features.position(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.position(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-text-alignment') {
        if (options.globalStyles) {
          features.textAlignment(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.textAlignment(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-text-size') {
        if (options.globalStyles) {
          features.textSize(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.textSize(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-text-transform') {
        if (options.globalStyles) {
          features.textTransform(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.textTransform(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-visibility') {
        if (options.globalStyles) {
          features.visibility(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.visibility(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }

      if (comment.text === 'postcss-functional-css-z-index') {
        if (options.globalStyles) {
          features.zIndex(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.zIndex(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }


      if (comment.text === 'postcss-functional-css') {
        if (options.globalStyles) {

          features.alignContent(comment.parent, options);
          features.alignItems(comment.parent, options);
          features.alignSelf(comment.parent, options);
          features.display(comment.parent, options);
          features.flex(comment.parent, options);
          features.flexDirection(comment.parent, options);
          features.flexWrap(comment.parent, options);
          features.float(comment.parent, options);
          features.fontSize(comment.parent, options);
          features.fontWeight(comment.parent, options);
          features.lineHeight(comment.parent, options);
          features.height(comment.parent, options);
          features.justifyContent(comment.parent, options);
          features.margin(comment.parent, options, 'bottom');
          features.margin(comment.parent, options, 'left');
          features.margin(comment.parent, options, 'right');
          features.margin(comment.parent, options, 'top');
          features.minHeight(comment.parent, options);
          features.maxHeight(comment.parent, options);
          features.objectFit(comment.parent, options);
          features.opacity(comment.parent, options);
          features.padding(comment.parent, options, 'bottom');
          features.padding(comment.parent, options, 'left');
          features.padding(comment.parent, options, 'right');
          features.padding(comment.parent, options, 'top');
          features.position(comment.parent, options);
          features.textAlignment(comment.parent, options);
          features.textSize(comment.parent, options);
          features.textTransform(comment.parent, options);
          features.visibility(comment.parent, options);
          features.zIndex(comment.parent, options);
        }

        if (options.mediaQueries.length) {
          options.mediaQueries.forEach(media => {
            const atRule = postcss.atRule({
              name: 'media',
              params: media.params
            });

            const prefix = media.prefix || '';
            const prefixSeparator = media.prefixSeparator || '';
            const classNamePrefix = prefix + prefixSeparator;

            features.alignContent(atRule, options, classNamePrefix);
            features.alignItems(atRule, options, classNamePrefix);
            features.alignSelf(atRule, options, classNamePrefix);
            features.display(atRule, options, classNamePrefix);
            features.flex(atRule, options, classNamePrefix);
            features.flexDirection(atRule, options, classNamePrefix);
            features.flexWrap(atRule, options, classNamePrefix);
            features.float(atRule, options, classNamePrefix);
            features.fontSize(atRule, options, classNamePrefix);
            features.fontWeight(atRule, options, classNamePrefix);
            features.lineHeight(atRule, options, classNamePrefix);
            features.height(atRule, options, classNamePrefix);
            features.justifyContent(atRule, options, classNamePrefix);
            features.margin(atRule, options, 'bottom', classNamePrefix);
            features.margin(atRule, options, 'left', classNamePrefix);
            features.margin(atRule, options, 'right', classNamePrefix);
            features.margin(atRule, options, 'top', classNamePrefix);
            features.minHeight(atRule, options, classNamePrefix);
            features.maxHeight(atRule, options, classNamePrefix);
            features.objectFit(atRule, options, classNamePrefix);
            features.opacity(atRule, options, classNamePrefix);
            features.padding(atRule, options, 'bottom', classNamePrefix);
            features.padding(atRule, options, 'left', classNamePrefix);
            features.padding(atRule, options, 'right', classNamePrefix);
            features.padding(atRule, options, 'top', classNamePrefix);
            features.position(atRule, options, classNamePrefix);
            features.textAlignment(atRule, options, classNamePrefix);
            features.textSize(atRule, options, classNamePrefix);
            features.textTransform(atRule, options, classNamePrefix);
            features.visibility(atRule, options, classNamePrefix);
            features.zIndex(atRule, options, classNamePrefix);

            comment.parent.append(atRule);
          });
        }
      }
    });
  }
});
