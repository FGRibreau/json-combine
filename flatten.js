function flatten(input) {
  function traverse(input, f, path = []) {
    if (input.length === 0) {
      return f(path);
    }

    input[0].values.forEach(val => {
      traverse(
        input.slice(1),
        f,
        path.concat({
          key: input[0].key,
          value: val,
        })
      );
    });
  }

  // use flatten instead?
  const output = [];
  traverse(input, function endNode(node) {
    output.push(node);
  });

  return output;
}

module.exports = flatten;
