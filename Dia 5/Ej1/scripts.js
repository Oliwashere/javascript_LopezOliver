const rl = {
    question: function(question, callback) {
      const userInput = prompt(question);
      callback(userInput);
    },
    close: function() {
    }
  };

rl.question('Posición de la primera reina (fila columna): ', (position) => {
    const [row, col] = position.split(' ').map(Number);

    const board = [];
    for (let i = 0; i < 8; i++) {
      board.push(Array(8).fill('O'));
    }
  
    board[row - 1][col - 1] = 'R';
  
    console.log('Tablero de ajedrez:');
    board.forEach(row => console.log(row.join(' ')));
  
  rl.close();
});
