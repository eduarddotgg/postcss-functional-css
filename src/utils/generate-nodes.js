
const postcss = require('postcss');

module.exports = (rules) => {
  const newRules = [];

  rules.forEach(rule => {
    const newRule = postcss.rule({
      selector: rule.selector
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
