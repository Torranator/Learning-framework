//add getbyid func to sort games by category
import {data} from "./data.js"

const getGamesByCategory = (category) => {
  return data.filter((game) => {
    return game.category.find((item) => {
      return item.name === category;
    });
  });
}