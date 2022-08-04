function isPrime (n: number): boolean {

    if (n < 2) return false;
    if(n === 1) {
        return false
      }
      if (n === 2 || n === 3) {
        return true;
      }
      else if ( (n % 2 === 0) || (n % 3 === 0) ){
        return false;
      }
      else {
        for(let i = 4, s = Math.sqrt(n); i <= s; i++){
            if(n%i === 0) return false;
        }
        return true;
      }
};

export = function (n: number) : boolean {
    if(n < 0){
        throw new Error('The number must be a positive integer');
    }
    if(!Number.isInteger(n)){
        throw new Error('The number must be a integer');
    }
    return isPrime(n);
}