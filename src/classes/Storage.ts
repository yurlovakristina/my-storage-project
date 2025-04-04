// Универсальный класс Storage
export class Storage<T> {
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
  