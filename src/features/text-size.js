
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.textSize) {
    const rules = [];
    const values = config.features.textSize.values;
    const classNamePrefix = prefix || '';
    const className = config.features.textSize.className || 'text-size';
    const fontSizeUnit = config.features.textSize.fontSizeUnit;
    const lineHeightUnit = config.features.textSize.lineHeightUnit;

    values.forEach(item => {
      let selector;

      if (config.cssModules) {
        selector = camelCase(`${classNamePrefix}${className}-${item.fontSize}`);
      } else {
        selector = `${classNamePrefix}${className}-${item.fontSize}`;
      }

      const rule = {
        selector: `.${selector}`,
        decls: [
          {
            prop: 'font-size',
            value: `${item.fontSize}${fontSizeUnit}`
          },
          {
            prop: 'line-height',
            value: `${item.lineHeight}${lineHeightUnit}`
          }
        ]
      };

      rules.push(rule);
    });

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
