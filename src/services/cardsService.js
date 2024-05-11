import httpServices from "./httpService";

function getAllCards() {
  return httpServices.get("/allcards");
}

function deleteCard(id) {
  return httpServices.delete(`/mycards/delete/${id}`);
}

function createCard(cardential) {
  return httpServices.post("/mycards/create", cardential);
}

export function updateCard(id, card) {
  return httpServices.patch(`/mycards/update/${id}`, card);
}

export function getCard(id) {
  return httpServices.get(`/mycards/find/${id}`);
}

const cardServices = {
  getAllCards,
  deleteCard,
  createCard,
  updateCard,
  getCard,
};

export default cardServices;
