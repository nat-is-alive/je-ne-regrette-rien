// je ne regrette rien

class microsoftConsole {
  WriteLine(x: any) {
    console.log(x);
  }
}

class javaOut {
  println(x: any) {
    console.log(x);
  }
}

class javaSystem {
  out = new javaOut();
}

const Console = new microsoftConsole();
const System = new javaSystem();

const boolVal = true;

// valid C# code
if (boolVal) {
  Console.WriteLine("True");
} else {
  Console.WriteLine("False");
}

// valid Java code
if (boolVal) {
  System.out.println("True");
} else {
  System.out.println("False");
}

// valid JavaScript code
if (boolVal) {
  console.log("True");
} else {
  console.log("False");
}
