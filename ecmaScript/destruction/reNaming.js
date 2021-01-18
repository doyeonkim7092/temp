const settings = {
  color: {
    chosen_color: "dark",
  },
};

// part.01 just change variablesName
// const {
//   color: { chosen_color: chosenColor = "light" },
// } = settings;

//const chosenColor = settings.chosen_color || "light";

//part.02 use let ,change variableName and Change assignment

let chosenColor = "blue";

console.log(chosenColor); //blue

({
  color: { chosen_color: chosenColor = "light" },
} = settings);

console.log(chosenColor); //dark
