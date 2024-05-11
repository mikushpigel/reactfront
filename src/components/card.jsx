import { Link, redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";
import { useState } from "react";

const Card = ({ card }) => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    bizImage,
    bizAddress,
    bizName,
    bizDescription,
    bizPhone,
    _id,
    user_id,
  } = card;

  const handleDelete = () => {
    if (user._id !== user_id) {
      setError("only owners can delete their cards");
      return;
    }
    navigate(`/mycards/delete/${_id}`);
  };
  const handleEdit = () => {
    if (user._id !== user_id) {
      setError("only owners can edit their cards");
      return;
    }
    navigate(`/mycards/update/${_id}`);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={bizImage} alt={bizName} />
      <div className="card-body">
        <h5 className="card-title">{bizName}</h5>
        <p className="card-text">{bizDescription}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{bizAddress}</li>
        <li className="list-group-item">{bizPhone}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-dark" onClick={handleDelete}>
          delete
        </button>
        <button className="btn btn-dark" onClick={handleEdit}>
          edit
        </button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Card;
