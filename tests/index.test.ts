import { Greeter, HtmlGreeter, JavaScriptGreeter, LoudGreeter } from "../src";

describe("greeter", () => {
  test("when greeter called, should return greeting and name", () => {
    let helloName = new Greeter("Hello");
    expect(helloName.greet("Sam")).toBe("Hello, Sam!");
  });
  test("when greeter called, should return greeting and name", () => {
    let helloName = new Greeter("Hello");
    expect(helloName.greet("Paige")).toBe("Hello, Paige!");
  });
});

describe("JavaScriptGreeter", () => {
  test("When greeter is called, should return javascript console.logs", () => {
    let helloName = new JavaScriptGreeter("Hello");
    expect(helloName.greet("Sam")).toBe(`console.log('Hello, Sam!')`);
  });
});

describe("loudgreeter", () => {
  test("when greeter called, should return greeting and name", () => {
    let helloName = new LoudGreeter("Hello", "!");
    helloName.addVolume();
    expect(helloName.greet("Sam")).toBe("Hello, Sam!!");
  });
  test("when greeter called, should return greeting and name", () => {
    let helloName = new LoudGreeter("Hello", "!");
    helloName.addVolume();
    helloName.addVolume();
    expect(helloName.greet("Paige")).toBe("Hello, Paige!!!");
  });
});

describe("HtmlGreeter", () => {
  test("when greeter called, should return <h1> and name", () => {
    let helloName = new HtmlGreeter("Hello");
    expect(helloName.greet("Sam")).toBe("<h1>Hello, Sam!</h1>");
  });
  test("when greeter called, should return <span> and name", () => {
    let helloName = new HtmlGreeter("Hello", "span");
    expect(helloName.greet("Paige")).toBe("<span>Hello, Paige!</span>");
  });
});
