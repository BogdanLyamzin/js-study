const PurchaseList = ({ items = [], deletePurchase }) => {
  const elements = items.map(({name, category}, index) => (
    <li key={name}>
      {name}. {category}. <button onClick={()=> deletePurchase(index)}>Delete</button>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default PurchaseList;
