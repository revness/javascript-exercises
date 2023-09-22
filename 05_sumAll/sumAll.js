const sumAll = function(a, b) {
if (a<0 || b<0){
return 'ERROR'
}
if (typeof(a) != 'number' || typeof(b) != 'number'){
return 'ERROR'
}
let c=0
if (a<b){
for (let i=a; i<b+1; i++){
c +=i 
};
return c}
else {
for (let i=b;i<a+1; i++){
c+=i
}
return c
}}

// Do not edit below this line
module.exports = sumAll;
