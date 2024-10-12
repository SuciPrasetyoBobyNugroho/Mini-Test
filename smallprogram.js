function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function fooBarProgram() {
    for (let i = 100; i >= 1; i--) {
        if (isPrime(i)) {
            continue; // Lewati bilangan prima
        } else if (i % 15 === 0) {
            process.stdout.write("FooBar ");
        } else if (i % 3 === 0) {
            process.stdout.write("Foo ");
        } else if (i % 5 === 0) {
            process.stdout.write("Bar ");
        } else {
            process.stdout.write(i + " ");
        }
    }
}

fooBarProgram();
