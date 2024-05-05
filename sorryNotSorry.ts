// je ne regrette rien

const log = (x: any, y?: any) => {
  typeof y === "undefined" ? console.log(x) : console.log(x, y);
};

class microsoftConsole {
  WriteLine(x: any, y?: any) {
    log(x, y);
  }
}

class javaOut {
  println(x: any, y?: any) {
    log(x, y);
  }
}

class javaSystem {
  out = new javaOut();
}

const Console = new microsoftConsole();
const System = new javaSystem();

// valid C# code
if (2 != 2) {
  Console.WriteLine("You are a Mathematician");
} else {
  Console.WriteLine("You are an Engineer");
}

switch ("word") {
  case "word":
    Console.WriteLine("Hello World, from C#");
    break;
}

// valid Java code
if (2 != 2) {
  System.out.println("You are a Mathematician");
} else {
  System.out.println("You are an Engineer");
}

switch ("word") {
  case "word":
    System.out.println("Hello World, from Java");
    break;
}

// valid JavaScript code
if (2 != 2) {
  console.log("You are a Mathematician");
} else {
  console.log("You are an Engineer");
}

switch ("word") {
  case "word":
    console.log("Hello World, from JavaScript");
    break;
}
