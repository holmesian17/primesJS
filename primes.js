var primes = [];
var nums = [];
for (let current = 0; current < 100; current = current + 1) {
	nums.push(current); 
	for (var i = 0; i < nums.length; i++) {
  	  if (current % nums[i] != 0 && i !== nums.length) {
		continue; }
	  else if (current % nums[i] != 0 && i == nums.length) {
		primes.push(current);
	  else	
		(break;) 
    }
console.log(primes)
}
