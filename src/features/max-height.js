
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.maxHeight && config.features.maxHeight.values) {
    const rules = [];
    const values = config.features.maxHeight.values;
    const classNamePrefix = prefix || '';
    const className = config.features.maxHeight.className || 'max-height';
    const unit = config.features.maxHeight.unit;

    values.forEach(item => {
      const rule = {
        selector: `.${classNamePrefix}${className}-${item}`,
        decls: [
          {
            prop: `max-height`,
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
