"use client";
import axios from "axios";
import styles from "./ShowPokemon.module.css";
import { useEffect, useState } from "react";
import { InfoBox } from "../InfoBox/InfoBox";

export function ShowPokemon({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState([{}]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (pokemonName === "") {
        alert("Enter pokemon name");
        return;
      }
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data);
        console.log(response.data);
      } catch (error) {
        alert("Wrong pokemon name");
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  return (
    <div className={styles.pokemon}>
      <h1>{pokemonData.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
        alt="pokemon"
      />
      <div className={styles.pokemonInfo}>
        <InfoBox>
          <h2> Types: </h2>
          <br />
          {pokemonData.types && (
            <ul>
              {pokemonData.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}
            </ul>
          )}
        </InfoBox>
        <InfoBox>
          <h2>Abilities</h2>
          {pokemonData.abilities && (
            <ul>
              {pokemonData.abilities.map((abilit, index) => (
                <li key={index}>{abilit.ability.name}</li>
              ))}
            </ul>
          )}
        </InfoBox>
        <InfoBox>
          <h2>Height</h2>
          <br />
          {pokemonData.height} decimetres
        </InfoBox>
        <InfoBox>
          <h2>Weight</h2>
          <br />
          {pokemonData.weight} hectograms
        </InfoBox>
      </div>
    </div>
  );
}
