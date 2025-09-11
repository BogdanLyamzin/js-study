import Menu from "./components/Menu/Menu";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import BuyList from "./components/BuyList/BuyList";

const buyListItems = [
  {
    id: 1,
    name: "Корм для кота",
  },
  {
    id: 2,
    name: "Наповнювач для кота",
  },
  {
    id: 3,
    name: "Іграшки для кота",
  },
];

function App() {
  return (
    <>
      <Menu />
      <ToggleButton firstText="Click me" secondText="Show me" />
      <BuyList items={buyListItems} />
    </>
  );
}

export default App;
