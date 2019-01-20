
module.exports = (node, mediaQuery, increment) => {
  let inc = 0;
  while (inc <= 100) {
    node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}opacity-${inc} { opacity: ${inc}; }`);
    inc += increment;
  }
};
