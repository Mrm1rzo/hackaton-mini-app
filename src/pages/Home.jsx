import { LocationHistory, LocationSearch } from "../components";

const Home = () => {
  return (
    <section className="align-elements">
      <h1 className="collapse-title text-center">Search for tickets</h1>
      <LocationSearch></LocationSearch>
      <h1 className="collapse-title text-center">Search history</h1>

      <LocationHistory />
      <LocationHistory />
      <LocationHistory />
    </section>
  );
};

export default Home;
