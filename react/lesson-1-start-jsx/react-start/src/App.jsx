import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import List from "./components/List/List";

import "./styles/style.css";

const products = [
  {
    id: "1",
    name: "notebook",
    price: 3000,
    count: 5,
  },
  {
    id: "2",
    name: "mouse",
    price: 30,
    count: 3,
  },
];

function App() {
  return (
    <>
    {/* Header() */}
      <Header /> 
      {/* createElement("main", null) */}
      <main> 
       <Button active><sup>5</sup> Show modal</Button>
       <form action="">
       <Button type="submit">Register</Button>
       </form>
       {/* const props = {
        items: products,
       } 
       List(props)
       */}
       <List items={products} />
      {/* 
      const props = {
        text: "Show modal",
        type: "button"
      } 
      Button(props);
      
      */}

      </main>
      <Footer />
    </>
  );
}

export default App;
