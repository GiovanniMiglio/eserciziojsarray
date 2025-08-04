function palindroma(str) {
  str = str.toLowerCase().replace(/\W/g, "");
 if( str === str.split('').reverse().join('')){
    return true;
 }else{
    return false;
 }

}
console.log( palindroma("In girum imus nocte et consumimur igni"));
