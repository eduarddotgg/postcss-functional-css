
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./display-rules');

module.exports = (node, config, prefix) => {
  if (config.features.display) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.display.className === '') {
      className = '';
    } else if (config.features.display.className) {
      className = config.features.display.className + '-';
    } else {
      className = 'display-'
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
