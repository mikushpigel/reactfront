import useAllCards from "../hooks/useAllCards";
import Card from "./card";
import PageHeader from "./common/pageHeader";

const AllCards = () => {
  const cards = useAllCards();

  return (
    <>
      <PageHeader title="All Cards Of" />
      {cards.length > 0 ? (
        cards.map((card) => <Card key={card._id} card={card} />)
      ) : (
        <p>no cards..</p>
      )}
    </>
  );
};

export default AllCards;
