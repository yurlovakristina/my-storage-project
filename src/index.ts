// Importing classes and interface
import { Storage } from "./classes/Storage";
import { NameStorage } from "./classes/NameStorage";

// Testing with primitive types
const stringStorage = new Storage<string>();
stringStorage.add("Hello");
console.log(stringStorage.get()); // "Hello"
stringStorage.clear();
console.log(stringStorage.get()); // null

const numberStorage = new Storage<number>();
numberStorage.add(42);
console.log(numberStorage.get()); // 42

// Testing with a custom type (object with a 'name' property)
const personStorage = new NameStorage<{ name: string, age: number }>();
personStorage.add({ name: "Alice", age: 30 });
console.log(personStorage.get()); // { name: "Alice", age: 30 }

// Displaying message that tests passed
console.log("Tests passed successfully!");
