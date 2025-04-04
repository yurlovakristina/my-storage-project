
export class Storage<T> {
    private value: T | null = null;
  
  
    add(value: T): void {
      this.value = value;
    }
  
    get(): T | null {
      return this.value;
    }
  
   
    clear(): void {
      this.value = null;
    }
  }
  
