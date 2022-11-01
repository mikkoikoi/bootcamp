// procedure mode()
   
//    Array A
//    FOR EACH value i in A DO
//       Set Count to 0
//       FOR j FROM 0 to i DO
//          IF A[i] = A[j]
//             Increment Count
//          END IF
//       END FOR
      
//       IF Count > MaxCount
//          MaxCount =  Count
//          Value    =  A[i]
//       END IF
//    END FOR
//    DISPLAY Value as Mode
   
// end procedure


const mode = (A) => {
    
    let maxCount = -1;
    let value;
    for (let i in A) {
      let count = 0;
      for (let j = 0; j <= i; j++) {
        if (A[i] === A[j]) {
          count++;
        }
      }
  
      if (count > maxCount) {
        maxCount = count;
        value = A[i];
      }
    }
  
    return value;
  }
  
  const data = [2, 2, 3, 1, 1, 4, 1, 3, 2, 4, 2];
  console.log(mode(data));