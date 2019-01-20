
module.exports = (node, mediaQuery, weights) => {
  if (weights && weights.length) {
    weights.forEach(weight => {
      node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}font-weight-${weight} { font-weight: ${weight}; }`);
    });
  }
};
