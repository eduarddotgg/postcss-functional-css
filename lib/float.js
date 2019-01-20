
const postcss = require('postcss');
const rules = require('./float-rules');

module.exports = (media, global) => {
  const newRules = [];

  rules.forEach(rule => {
    let selector = '';
    if (!global) {
      selector = `.${media.prefix}${media.prefixSeparator}${rule.selector}`;
    } else {
      selector = `.${rule.selector}`;
    }

    const newRule = postcss.rule({
      selector: selector
    });

    rule.decls.forEach(decl => {
      newRule.append(postcss.decl({
        prop: decl.prop,
        value: decl.value
      }))
    });

    newRules.push(newRule);
  });

  return newRules;
};
