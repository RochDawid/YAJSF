/** @jsx yajsf */

function yajsf(element, props, ...child) {
  const children = [].concat(...child);
  return { element, props, children };
}

function render(node) {
  const element = document.createElement(node.element);
  if (node.props) {
    Object.keys(node.props).forEach((key) => {
      element.setAttribute(key, node.props[key]);
    });
  }
  node.children.forEach((child, i) => {
    if (typeof child === "string") {
      const text = document.createTextNode(child);
      element.appendChild(text);
    } else {
      element.appendChild(render(child));
    }
  });
  return element;
}

const rootNode = (
  <div>
    <h2>I'm a boring h2 element</h2>
    <span class="big" style="color: red;">
      I'm a span element with the big class and red color inline style
    </span>
  </div>
);
document.body.appendChild(render(rootNode));
console.log("Root node: ", rootNode);
