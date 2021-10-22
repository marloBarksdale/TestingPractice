const strings = ["Crazy", "pool", "freedom", "pOlice"];

 export function capitalize(word) {
  let e = word.replace(word.charAt(0), word.charAt(0).toUpperCase());

//   console.log(e);

  return e;
}

strings.forEach((word) => {
  capitalize(word);
});

capitalize("word");


