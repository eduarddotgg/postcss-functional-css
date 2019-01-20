
module.exports = (node, mediaQuery, sizes) => {
  if (sizes && sizes.length) {
    sizes.forEach(size => {
      if (typeof size === 'number') {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}font-size-${size} { font-size: ${size}px; }`);
      }
    });
  }
};
