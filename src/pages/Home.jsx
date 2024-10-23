import Input from "../companents/Input";
import LoactionHistory from "../companents/LoactionHistory";
import LocationSearch from "../companents/LocationSearch";

const Home = () => {
  return (
    <section className="align-elements">
      <h1 className="collapse-title text-center">Search for tickets</h1>
      <LocationSearch></LocationSearch>
      <LoactionHistory></LoactionHistory>
    </section>
  );
};

export default Home;
