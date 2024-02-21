"use client";
import axios from "axios";
import styles from "./ShowPokemon.module.css";
import { useEffect, useState } from "react";

export function ShowPokemon({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState([{}]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
        setPokemonData(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  return (
    <div className={styles.pokemon}>
      <h1>{pokemonData.name}</h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pokemon"
      />
      <h2>Types:</h2>
      <br />
      {pokemonData.types && (
        <ul>
          {pokemonData.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      )}
      <h2>Abilities</h2>
      <br />
      {pokemonData.abilities && (
        <ul>
          {pokemonData.abilities.map((abilit, index) => (
            <li key={index}>{abilit.ability.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
