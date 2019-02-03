
const camelCase = require('lodash.camelcase');
const generateNodes = require('../utils/generate-nodes');
const values = require('./align-self-rules');

module.exports = (node, config, prefix) => {
  if (config.features.alignSelf) {
    const rules = [];
    const classNamePrefix = prefix || '';
    let className;

    if (config.features.alignSelf.className === '') {
      className = '';
    } else if (config.features.alignSelf.className) {
      className = config.features.alignSelf.className + '-';
    } else {
      className = 'self-'
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
