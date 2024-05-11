import PageHeader from "./common/pageHeader";
import Greeting from "./greeting";

const Home = () => {
  return (
    <div>
      <Greeting />
      <PageHeader description="hello! my name is Mika Rotem. I am 28 years old. I am Web Developer and Video Editor." />
    </div>
  );
};
export default Home;
