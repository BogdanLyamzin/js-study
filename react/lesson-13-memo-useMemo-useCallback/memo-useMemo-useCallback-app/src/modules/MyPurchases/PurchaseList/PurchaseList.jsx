const PurchaseList = ({ items = [], deletePurchase }) => {
  const elements = items.map(({id, name, category}) => (
    <li key={id}>
      {name}. {category}. <button onClick={()=> deletePurchase(id)}>Delete</button>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default PurchaseList;
