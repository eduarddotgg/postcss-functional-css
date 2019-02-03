
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./float-rules');

module.exports = (node, config, prefix) => {
  if (config.features.float) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.float.className === '') {
      className = '';
    } else if (config.features.float.className) {
      className = config.features.float.className + '-';
    } else {
      className = 'float-'
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
