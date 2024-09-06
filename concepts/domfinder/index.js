const getPathFromChildToParent = (parent, child) => {
  let currentNode = child
  const pathArray = []
  while(currentNode !== parent) {
    const parentElement = currentNode.parentElement
    const childrenArray = Array.from(parentElement.children)
    console.log(childrenArray, "this is children ARRAY");
    pathArray.push(childrenArray.indexOf(currentNode))
    console.log(pathArray, "this is pathArray");
    currentNode = parentElement
  }
  return pathArray
};

const getValueFromPath = (parent, path) => {
    let currentNode = parent
    while(path.length) {
        currentNode = currentNode.children[path.pop()]
    }
    return currentNode.innerText
};

const findNodeValue = () => {
  const rootA = document.getElementById('rootA');
  const rootB = document.getElementById("rootB");
  const nodeA = document.getElementById("nodeA");
  const path = getPathFromChildToParent(rootA, nodeA);
  return getValueFromPath(rootB, path);
};
console.log(findNodeValue());
document.getElementById("output").innerHTML = findNodeValue();