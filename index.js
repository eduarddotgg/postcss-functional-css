const postcss = require('postcss');

const features = require('./src/features');
const config = require('./config');

module.exports = postcss.plugin('postcss-functional-css',  (opts) => {
  const options = Object.assign(config, opts);

  return css => {
    css.walkComments(comment => {
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
