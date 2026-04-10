const MyBooksList = ({ items = [], onDeleteBook }) => {
  const elements = items.map(({ id, name, author, favorite }) => (
    <li style={{ fontWeight: favorite ? "bold" : "normal" }} key={id}>
      Name: {name}. Author: {author}
      <button type="button" onClick={()=> onDeleteBook(id)}>Delete book</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MyBooksList;
