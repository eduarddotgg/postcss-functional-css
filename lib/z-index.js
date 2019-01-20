
module.exports = (node, mediaQuery, increment, limit) => {
  let inc = 0;
  while (inc <= limit) {
    node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}z-index-${inc} { z-index: ${inc}; }`);
    inc += increment;
  }
};
