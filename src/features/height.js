
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.height) {
    const rules = [];
    const values = config.features.height.values;
    const classNamePrefix = prefix || '';
    const className = config.features.height.className || 'height';
    const unit = config.features.height.unit;

    values.forEach(item => {
      const rule = {
        selector: `.${classNamePrefix}${className}-${item}`,
        decls: [
          {
            prop: `height`,
            value: item === 'auto' ? item : `${item}${unit}`
          }
        ]
      };

      rules.push(rule);
    });

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
