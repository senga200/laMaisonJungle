// const plantList = [
//   "monstera",
//   "ficus lyrata",
//   "pothos argenté",
//   "yucca",
//   "palmier",
// ];

// function ShoppingList() {
//   return (
//     <ul>
//       {plantList.map((plant, index) => (
//         <li key={`${plant}-${index}`}>{plant}</li>
//       ))}
//     </ul>
//   );
// }

import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
//import CareScale from "./CareScale";
import PlantItem from "./PlantItem";

// function ShoppingList() {
//   const categories = plantList.reduce(
//     (acc, plant) =>
//       acc.includes(plant.category) ? acc : acc.concat(plant.category),
//     []
//   );

//   return (
//     <div>
//       <ul>
//         {categories.map((cat) => (
//           <li key={cat}>{cat}</li>
//         ))}
//       </ul>
//       <ul className="lmj-plant-list">
//         {plantList.map((plant) => (
//           <li key={plant.id} className="lmj-plant-item">
//             {/* {plant.name} {plant.isBestSale ? <span>🔥</span> : null} REVIENT A : */}
//             {plant.name}
//             {plant.isBestSale && <span>🔥</span>}
//             {plant.isSpecialOffer && <span className="lmj-sales">Soldes</span>}
//             <CareScale scaleValue={plant.light} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            key={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
