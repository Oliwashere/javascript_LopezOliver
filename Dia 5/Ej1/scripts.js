const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Posición de la primera reina (fila columna): ', (position) => {
  rl.close();
});
