import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

const cards = cardData.map((card) => {
  return <Card key={card.id} {...card} />;
});

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--list">{cards}</section>
    </div>
  );
}

export default App;
