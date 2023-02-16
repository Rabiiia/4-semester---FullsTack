
export default class Person {
    name: string;
    age: number;
    occupation: string;
    private_salary: number;
    
    constructor(name: string, age: number, occupation: string, salary: number = 0) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.private_salary = salary;
    }





    introduce(): string {
    return `Hello, my name is ${this.name} and I am a ${this.occupation}. I earn ${this.private_salary}$`;
    }
    
    incrementAge(): void {
    this.age++;
    }
    
    setSalary(salary: number): void {
    this.private_salary = salary;
    }
    
    getSalary(): number {
    return this.private_salary;
    }
    
}

const john = new Person("John Smith", 30, "software developer");
console.log(john.introduce()); // "Hello, my name is John Smith and I am a software developer. I earn 0$"
console.log(john.age); // 30
john.incrementAge();
console.log(john.age); // 31
john.setSalary(100000);
console.log(john.getSalary()); //100000
console.log(john.introduce()); // "Hello, my name is John Smith and I am a software developer. I earn 100000$"