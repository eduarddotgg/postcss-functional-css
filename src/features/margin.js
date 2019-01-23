
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, direction, prefix) => {
  if (config.features.margin[direction]) {
    const rules = [];
    const values = config.features.margin[direction].values;
    const classNamePrefix = prefix || '';
    const className = config.features.margin[direction].className || `margin-${direction}`;
    const unit = config.features.margin[direction].unit;

    values.forEach(item => {
      const rule = {
        selector: `.${classNamePrefix}${className}-${item}`,
        decls: [
          {
            prop: `margin-${direction}`,
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
