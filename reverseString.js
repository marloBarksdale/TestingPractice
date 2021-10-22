const string = "Hello";

export const reverse = (e) => {
  let Na = e.split("").reverse().join("");

  console.log(Na);
  return Na;
};

reverse(string);
