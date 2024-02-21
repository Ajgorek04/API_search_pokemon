"use client";
import { useState } from "react";
import { ShowPokemon } from "../ShowPokemon/ShowPokemon";
import styles from "./Content.module.css";

export function Content() {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <section className={styles.content}>
      <input className={styles.input} type="text" />

      <ShowPokemon pokemonName={pokemonName} />
    </section>
  );
}
