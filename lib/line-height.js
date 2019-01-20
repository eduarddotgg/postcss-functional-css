
module.exports = (node, mediaQuery, sizes) => {
  if (sizes && sizes.length) {
    sizes.forEach(size => {
      if (typeof size === 'number') {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}line-height-${size} { line-height: ${size}px; }`);
      }
    });
  }
};
