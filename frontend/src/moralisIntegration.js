import { Moralis } from "moralis";

export const addCharacter = (name, token) => {
  const Character = Moralis.Object.extend("Character");
  const char = new Character();

  char.set("token_id", token);
  char.set("name", name);
  char.set("lastMated", null);
  char.set("lastFed", null);
  char.set("lastSalary", null);

  char
    .save()
    .then((character) => {
      console.log(character);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateCharacterInfo = ({
  token,
  lastMated,
  lastFed,
  lastSalary,
}) => {
  const Character = Moralis.Object.extend("Character");
  const query = new Moralis.Query(Character);
  query.equalTo("token_id", token);
  query.find().then((char) => {
    char.set("lastMated", lastMated);
    char.set("lastFed", lastFed);
    char.set("lastSalary", lastSalary);
    return char.save();
  });
};
