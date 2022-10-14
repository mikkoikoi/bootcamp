function sortir(array) {
    let done = false;
    while (!done) {
      done = true;
      for (var i = 0; i < array.length; i ++) {
        if (array[i - 1] > array[i]) {
          done = false;
          // let penyortir = array[i - 1];
          // array[i - 1] = array[i];
          // array[i] = penyortir;
          [array[i-1], array [i]] = [array[i], array[i - 1]]
        
        }
      }
    }
  
    return array;
  }
  
 let angka = [12, 10, 15, 11, 14, 13, 16];
  sortir(angka);
  console.log(angka);
