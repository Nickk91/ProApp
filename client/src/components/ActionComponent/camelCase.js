const camelCase = (str) => {
  const arr = str.split(" ");
  let result = "";
  arr.map((word, idx) => {
    if (idx === 0) {
      result += word.toLowerCase();
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return result;
};

console.log(camelCase("Hey Mister"));
console.log(camelCase("Dj dont stop the music"));

// Count vowels
// How do you count the number of vowels and consonants in a given string

// task: count the vowels in a string
// input: text: string
// output: integer: number of vowels
