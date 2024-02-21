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
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pokemon"
      />
      <h1>{pokemonData.name}</h1>
      <br />
      <h2>Types:</h2>
      {pokemonData.types && (
        <ul>
          {pokemonData.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      )}
      <h2>Abilities</h2>
      {pokemonData.abilities && (
        <ul>
          {pokemonData.abilities.map((ability, index) => (
            <li key={index}>{ability.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
