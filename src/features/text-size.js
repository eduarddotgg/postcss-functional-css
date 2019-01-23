
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
      const rule = {
        selector: `.${classNamePrefix}${className}-${item.fontSize}`,
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
