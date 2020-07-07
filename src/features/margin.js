
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');

module.exports = (node, config, direction, prefix) => {
  if (config.features.margin[direction]) {
    const rules = [];
    const values = config.features.margin[direction].values;
    const classNamePrefix = prefix || '';
    let className;
    const unit = config.features.margin[direction].unit;

    if (config.cssModules) {
      className = direction
    } else {
      className = config.features.margin[direction].className || `margin-${direction}`;
    }

    values.forEach(item => {
      let selector;

      if (config.cssModules) {
        selector = camelCase(`${classNamePrefix}${className}-${item}`);
      } else {
        selector = `${classNamePrefix}${className}-${item}`;
      }

      const rule = {
        selector: `.${selector}`,
        decls: []
      };

      if (direction === 'x') {
        rule.decls.push({
            prop: `margin-left`,
            value: `${item}${unit}`
        })
        rule.decls.push({
            prop: `margin-right`,
            value: `${item}${unit}`
        })
      } else if (direction === 'y') {
        rule.decls.push({
          prop: `margin-bottom`,
          value: `${item}${unit}`
        })
        rule.decls.push({
          prop: `margin-top`,
          value: `${item}${unit}`
        })
      } else if (direction === 'all') {
        rule.decls.push({
          prop: `margin`,
          value: `${item}${unit}`
        })
      } else {
        rule.decls.push({
          prop: `margin-${direction}`,
          value: `${item}${unit}`
        })
      }

      rules.push(rule);
    });

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
