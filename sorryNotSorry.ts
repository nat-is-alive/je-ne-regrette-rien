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

const boolVal: boolean = true;

// valid C# code
if (boolVal) {
  Console.WriteLine("Hello from C#");
} else {
  Console.WriteLine(boolVal);
}

switch ("word") {
  case "word":
    Console.WriteLine("Hello from C#");
    break;
}

// valid Java code
if (boolVal) {
  System.out.println("Hello from Java");
} else {
  System.out.println(boolVal);
}

switch ("word") {
  case "word":
    System.out.println("Hello from Java");
    break;
}

// valid JavaScript code
if (boolVal) {
  console.log("Hello from JavaScript");
} else {
  console.log(boolVal);
}

switch ("word") {
  case "word":
    console.log("Hello from JavaScript");
    break;
}
