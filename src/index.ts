// Импорт классов и интерфейса
import { Storage } from "./classes/Storage";
import { NameStorage } from "./classes/NameStorage";

// Тестирование с примитивными типами
const stringStorage = new Storage<string>();
stringStorage.add("Привет");
console.log(stringStorage.get()); // "Привет"
stringStorage.clear();
console.log(stringStorage.get()); // null

const numberStorage = new Storage<number>();
numberStorage.add(42);
console.log(numberStorage.get()); // 42

// Тестирование с пользовательским типом (объект с свойством 'name')
const personStorage = new NameStorage<{ name: string, age: number }>();
personStorage.add({ name: "Алиса", age: 30 });
console.log(personStorage.get()); // { name: "Алиса", age: 30 }

// Выводим сообщение о прохождении тестов
console.log("Тесты прошли успешно!");
