import { useEffect } from "react";
import cardServices from "../services/cardsService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteCard = async () => {
      try {
        await cardServices.deleteCard(id);
        toast.success("deleted Successfuly!");
        navigate("/allcards");
      } catch (error) {}
    };
    deleteCard();
  }, []);
};
export default DeleteCard;
