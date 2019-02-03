
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./position-rules');

module.exports = (node, config, prefix) => {
  if (config.features.position) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.position.className === '') {
      className = '';
    } else if (config.features.position.className) {
      className = config.features.position.className + '-';
    } else {
      className = 'position-'
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
