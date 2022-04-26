import { Greeter } from "./greeter";
export class HtmlGreeter extends Greeter {
  tagName: string = "h1";
  constructor(greeting: string, tagName?: string) {
    //all optional parameters must go after non-optional parameters
    super(greeting);
    if (tagName) {
      this.tagName = tagName;
    }
  }
  greet(name: string) {
    //   Example: "<h1>Hello, Grant!</h1>"
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`;
  }
}
