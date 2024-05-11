import { useEffect, useState } from "react";
import cardServices from "../services/cardsService";

const useAllCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getAllCards = async () => {
      try {
        const { data } = await cardServices.getAllCards();
        setCards(data);
      } catch (error) {
        console.log("error getallcards", error);
      }
    };
    getAllCards();
  }, []);
  return cards;
};

export default useAllCards;
