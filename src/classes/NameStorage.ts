
import { HasName } from "../interfaces/HasName";
import { Storage } from "./Storage";


export class NameStorage<T extends HasName> {
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
