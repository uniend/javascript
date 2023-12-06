function solution(n) {
  if(1 <= n && n <= 100){
      const  array = [];
      for(let i = 0; i <= n; i++){
          if( (i%2 === 1) && i <= n){
              array.push(i);
          }
      }
      return array
  }
}