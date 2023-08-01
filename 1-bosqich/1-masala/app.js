function OrdaklarSonini(n, m) {
    let count = 0;
    for (let i = 0; i < m; i++) {
      count += n;
    }
    return count;
  }
  
  
  let n = 5;
  let m = 3;
  let ordaklarSon = OrdaklarSonini(n, m);
  alert("O'rdaklar soni: " + ordaklarSon);