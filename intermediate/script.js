class Planet {
	constructor(name,age,orbit){
		this.name = name;
		this.age = parseInt(age)/12/30/24/60/60;
		this.orbit = parseFloat(orbit);
	}
	calcAge(){
		this.age = this.age * this.orbit;
	}

	showAge(){ 
		return `You are ${this.age} old on ${this.name}`;
	}
}

let mercury = new Planet("mercury","1000000000","0.2408467");
console.log(mercury.orbit)
mercury.calcAge();
document.write(mercury.showAge())