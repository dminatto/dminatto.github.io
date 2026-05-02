import CharacterPage from "@/components/CharacterPage";

async function getCharacter() {
  return {
    name: "Astraya Twilight",
    class: "Assassin",
    stats: {
      hp: 60,
      dexterity: 100,
    },
  };
}

export default async function Page() {
  const character = await getCharacter();

  return <CharacterPage character={character} />;
}
