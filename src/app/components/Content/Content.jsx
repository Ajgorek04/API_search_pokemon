"use client";
import { useState } from "react";
import { ShowPokemon } from "../ShowPokemon/ShowPokemon";
import styles from "./Content.module.css";

export function Content() {
  const [pokemonName, setPokemonName] = useState("pikachu");
  const [inputValue, setInputValue] = useState("");

  return (
    <section className={styles.content}>
      <ShowPokemon pokemonName={pokemonName} />
      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            setPokemonName(inputValue.toLowerCase());
            setInputValue("");
          }}
        >
          Search
        </button>
      </div>
    </section>
  );
}
