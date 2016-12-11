let HEX_COLOR_REGEX = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;

function validateColorsSizeAndFormat(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';

  let propValue = props[propName];

  if (propValue == null) {
    return new Error(`Required ${propName} was not specified in ${componentName}`);
  }

  if (!Array.isArray(propValue)) {
    return new Error(`${propName} in ${componentName} must be an array`);
  }

  if (propValue.length != 8) {
    return new Error(`${propName} in ${componentName} must have 8 elements`);
  }

  let wrongFormat = false;
  propValue.forEach(function(item, i) {
    if (!item.match(HEX_COLOR_REGEX)) {
      wrongFormat = true;
      return false;
    }
  });

  if (wrongFormat) {
    return new Error(`${propName} in ${componentName} has incorrect color format`);
  }

  // Everything is OK.
  return null;
}

export default validateColorsSizeAndFormat;
