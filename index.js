/** @jsx yajsf */

function yajsf(element, props, ...child) {
  const children = [].concat(...child);
  return { element, props, children };
}

const example = <span className="title">Hello world!</span>;
console.log("Element created: ", example);

const elementToAdd = document.createElement(example.element);
const textToAdd = document.createTextNode(example.children[0]);
elementToAdd.innerText = textToAdd.nodeValue;
elementToAdd.setAttribute("class", example.props.className);
document.body.appendChild(elementToAdd);
