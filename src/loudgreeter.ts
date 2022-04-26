import { Greeter } from "./greeter";
export class LoudGreeter extends Greeter {
  private extra: string = "!";
  constructor(greeting: string, extra: string) {
    super(greeting);
    this.extra = extra;
  }
  addVolume(): void {
    this.extra += "!";
  }
  greet(name: string) {
    return `${this.greeting}, ${name}${this.extra}`;
  }
}
