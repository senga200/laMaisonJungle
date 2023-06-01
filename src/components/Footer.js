import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  function handleInput(e) {
    setInputValue(e.target.value);
  }
  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }
  console.log(inputValue);

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        value={inputValue}
        onChange={handleInput}
        onBlur={handleBlur}
        type="text"
        placeholder="Entrez votre mail"
      />
    </footer>
  );
}

export default Footer;
