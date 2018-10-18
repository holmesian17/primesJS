var primes = [];
var nums = [];
for (let current = 0; current < 100; current = current + 1) {
	nums.push(current); 
	if (current % nums != 0) {
		primes.push(current);
    }
console.log(primes)
}
	
