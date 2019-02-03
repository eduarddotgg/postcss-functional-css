
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./align-items-rules');

module.exports = (node, config, prefix) => {
  if (config.features.alignItems) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.alignItems.className === '') {
      className = '';
    } else if (config.features.alignItems.className) {
      className = config.features.alignItems.className + '-';
    } else {
      className = 'items-'
    }

    values.forEach(item => {
      let selector;

      if (config.cssModules) {
        selector = camelCase(`${classNamePrefix}-${item.selector}`);
      } else {
        selector = `${classNamePrefix}${className}${item.selector}`;
      }

      const rule = {
        selector: `.${selector}`,
        decls: item.decls
      };

      rules.push(rule);
    });

    const nodes = generateNodes(rules);
    node.append(nodes);
  }
};
