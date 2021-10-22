

export function encrypt(text, step) {
  let encrypted = [];
  for (let i = 0; i < text.length; i++) {
    let nextChar = getNewCharacter(text.charCodeAt(i), step);

    encrypted[i] = nextChar;
  }
  
  encrypted = encrypted.join("");

  return encrypted.toString();
}

export function decrypt(text, step) {
  let decrypted = [];
  for (let i = 0; i < text.length; i++) {
    decrypted[i] = getNewCharacter(text.charCodeAt(i), -Math.abs(step));
  }
  decrypted = decrypted.join("");
 
  return decrypted.toString();
}

function getNewCharacter(character, step) {
  // character = character.charCodeAt(0);
  step = step % 26;

  if (character >= 65 && character <= 90) {
    if (character + step > 90) {
      character = character + step - 26;

      return String.fromCharCode(character);
    } else if (character + step < 65) {
      character = character + step + 26;
      return String.fromCharCode(character);
    } else {
      return String.fromCharCode(character + step);
    }
  } else if (character >= 97 && character <= 122) {
    if (character + step >= 97 && character + step >= 122) {
      character = character + step - 26;
      return String.fromCharCode(character);
    } else if (character + step < 97) {
      character = character + step + 26;
      return String.fromCharCode(character);
    } else {
      character = character + step;
   
      return String.fromCharCode(character);
    }
  } else {
    return String.fromCharCode(character);
  }
}

encrypt("hello", 100);

encrypt("defend the east wall of the castle", 1);
decrypt("hello", 6);
decrypt("EFGFOEUIFFBTUXBMMPGUIFDBTUMF", 1);

