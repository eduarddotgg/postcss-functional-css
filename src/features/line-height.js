
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.lineHeight) {
    const rules = [];
    const values = config.features.lineHeight.values;
    const classNamePrefix = prefix || '';
    const className = config.features.lineHeight.className || 'line-height';
    const unit = config.features.lineHeight.unit;

    values.forEach(item => {
      const rule = {
        selector: `.${classNamePrefix}${className}-${item}`,
        decls: [
          {
            prop: 'line-height',
            value: `${item}${unit}`
          }
        ]
      };

      rules.push(rule);
    });

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
