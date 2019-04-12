// self executing main function
(function() {
  console.log('Welcome to the calculator app');

  //--------------- put your code below this line -------------

  // output field for the calculator screen
  let output = document.getElementById('output');

  Array.from(
    document.querySelectorAll(".btn")).map(
      (e) => e.addEventListener('click', ({ target: { value } }) => {

        if (value === 'C') {
          return output.value = '';
        }

        if (value === '=') {
          let ops = output.value.split(/(\+|-|x)/);

          let comp = (op, cb) => {
            while (ops.indexOf(op) > -1) {
              let i = ops.indexOf(op);
              ops[i+1] = cb(parseInt(ops[i-1]), parseInt(ops[i+1]));
              ops.splice(i-1, 2);
            }
          }

          // BODMAS
          comp('x', (a,b) => a * b);
          comp('+', (a,b) => a + b);
          comp('-', (a,b) => a - b);

          return output.value += `=${ops[0]}`;
        }

        output.value += value;
      }
    )
  );
})();
