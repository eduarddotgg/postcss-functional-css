
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, prefix) => {
  if (config.features.fontWeight) {
    const rules = [];
    const values = config.features.fontWeight.values;
    const classNamePrefix = prefix || '';
    const className = config.features.fontWeight.className || 'font-weight';

    values.forEach(item => {
      const rule = {
        selector: `.${classNamePrefix}${className}-${item}`,
        decls: [
          {
            prop: 'font-weight',
            value: `${item}`
          }
        ]
      };

      rules.push(rule);
    });

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
