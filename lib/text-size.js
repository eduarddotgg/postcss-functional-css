
module.exports = (node, mediaQuery, sizes) => {
  if (sizes && sizes.length) {
    sizes.forEach(size => {
      if (size.fontSize && size.lineHeight) {
        node.append(`.${mediaQuery.prefix}${mediaQuery.prefixSeparator}text-size-${size.fontSize}-${size.lineHeight} { font-size: ${size.fontSize}px; line-height: ${size.lineHeight}px; }`);
      }
    });
  }
};
