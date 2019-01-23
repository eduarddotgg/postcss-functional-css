
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, direction, prefix) => {
  if (config.features.padding[direction]) {
    const rules = [];
    const values = config.features.padding[direction].values;
    const classNamePrefix = prefix || '';
    const className = config.features.padding[direction].className || `padding-${direction}`;
    const unit = config.features.padding[direction].unit;

    values.forEach(item => {
      const rule = {
        selector: `.${classNamePrefix}${className}-${item}`,
        decls: [
          {
            prop: `padding-${direction}`,
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
