
const postcss = require('postcss');

module.exports = (options, media, global) => {
  const rules = [];
  const newRules = [];

  let inc = 0;

  while (inc <= 100) {
    const rule = {
      selector: `opacity-${inc}`,
      decls: [
        {
          prop: 'opacity',
          value: `${inc}`
        }
      ]
    };
    rules.push(rule);
    inc += options.increment;
  }

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
