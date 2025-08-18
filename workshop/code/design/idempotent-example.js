/**********************************
 illustrating idempotency
 RWMBook 2021
***********************************/

// non-idempotent 
console.log("non-idempotent");
var t = 10;
for(x=0;x<2;x++) {
  t = t+1; //add
  console.log(`try ${x} : value ${t}`)
}

// idempotent
console.log("idempotent");
var t = 10;
for(x=0;x<2;x++) {
  t = 11; // replace
  console.log(`try ${x} : value ${t}`)
}

