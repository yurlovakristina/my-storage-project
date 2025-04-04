// Импорт интерфейса HasName
import { HasName } from "../interfaces/HasName";
import { Storage } from "./Storage";

// Класс, расширяющий Storage с ограничением на объекты с свойством 'name'
export class NameStorage<T extends HasName> {
  private value: T | null = null;

  // Добавить значение в хранилище
  add(value: T): void {
    this.value = value;
  }

  // Извлечь значение из хранилища
  get(): T | null {
    return this.value;
  }

  // Очистить сохранённое значение
  clear(): void {
    this.value = null;
  }
}
