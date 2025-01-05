import algo from './algo';

const Algo = () => {

  const value = algo;
  const logTree = (node) => {
    if (!node) return null;
    return {
        value: node.value,
        left: logTree(node.left),
        right: logTree(node.right),
    };
};

console.log(logTree(value.root));
  console.log(JSON.stringify(value, null, 5));
  return (
    <div className="App">
        <p>
        this is whatever {value}
        </p>
    </div>
  );
}

export default Algo;
