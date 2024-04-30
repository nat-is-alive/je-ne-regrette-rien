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

const boolVal: boolean = false;

// valid C# code
if (boolVal) {
  Console.WriteLine(boolVal, "Hello from C#");
} else {
  Console.WriteLine("False");
}

// valid Java code
if (boolVal) {
  System.out.println(boolVal, "Hello from Java");
} else {
  System.out.println("False");
}

// valid JavaScript code
if (boolVal) {
  console.log(boolVal, "Hello from JavaScript");
} else {
  console.log("False");
}
