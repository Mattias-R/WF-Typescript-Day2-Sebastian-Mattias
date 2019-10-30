class Person {
	constructor(name,age,jobTitle){
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}
	hello(){ return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`
	}
}

let haans = new Person("haans","67","unemplyed");

class worker extends Person {
	constructor(name,age,jobTitle,salary,jobLocation){
		super(name,age,jobTitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}
	hello(){return`${super.hello()} and I get ${this.salary} every month, and I work in ${this.jobLocation}
` }
}

let peter = new worker("peter","73","teacher","1400","CodeFactory");
document.write(peter.hello());