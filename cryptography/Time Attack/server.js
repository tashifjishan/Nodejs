// vulnerable-server.js
const http = require('http');

const SECRET = 'tashif';

// Insecure comparison — leaks timing info
function insecureCompare(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;

    // Delay (5ms) simulates processing time per character
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 5);
  }

  return true;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const guess = url.searchParams.get('guess');

  if (!guess) {
    res.writeHead(400);
    return res.end('Missing "guess" parameter');
  }

  const match = insecureCompare(guess, SECRET);

  res.writeHead(match ? 200 : 403);
  res.end(match ? 'Correct' : 'Incorrect');
});

server.listen(3000, () => {
  console.log('🚨 Insecure server running at http://localhost:3000');
});
