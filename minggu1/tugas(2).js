   const arr = [
    [1, 3, 4, 2],
    [4, 5, 3, 5],
    [5, 2, 6, 4],
    [8, 2, 9, 3]
 ];
 let diagonal = arr => {
    let start = 0;
    for(let baris = 0; baris < arr.length; baris++){
       for(let kolom = 0; kolom < arr[baris].length; kolom++){
          if(baris === kolom){
             console.log("ketemu" , arr[baris][kolom])
             start += arr[baris][kolom];
          };
       };
    };
    return start;
 };
 console.log("hasil penjumlahan : " + diagonal(arr));
 