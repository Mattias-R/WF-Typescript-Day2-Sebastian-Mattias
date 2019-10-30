class Person {
	constructor(name,age,jobTitle){
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}
	hello(){ console.log(`Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`);
	}
}

let haans = new Person("haans","67","unemplyed");
