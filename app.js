function generateRandomName(length) {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let name = "";

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      name += consonants.charAt(Math.floor(Math.random() * consonants.length));
    } else {
      name += vowels.charAt(Math.floor(Math.random() * vowels.length));
    }
  }

  return name;
}

const generateBtn = document.getElementById("generate-btn");
const nameDisplay = document.getElementById("name");

generateBtn.addEventListener("click", () => {
  const lengthInput = document.getElementById("length");
  const nameLength = parseInt(lengthInput.value);
  const newName = generateRandomName(nameLength);
  nameDisplay.textContent = newName;
});