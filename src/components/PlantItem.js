import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function handleClick() {
  alert("✨ Ceci est un clic ✨");
}
// Les props name et cover seront utilisées directement dans PlantItem
function PlantItem({ name, cover, id, light, water }) {
  //   function handleClick() {
  //     console.log(`Vous avez cliqué sur ${name}`);

  //     alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`);
  //   }

  return (
    <li key={id} className="lmj-plant-item" onClick={handleClick}>
      {name}
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      <div>
        {/* light et water, déjà créées, sont passées au composant CareScale dans PlantItem. */}
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
