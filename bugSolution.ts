function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//Solution 1: Type assertion
console.log(greeter(user as string));
//Solution 2: Array destructuring
console.log(greeter(user[0]));
//Solution 3: Concatenate array elements
console.log(greeter(user.join(" ")));