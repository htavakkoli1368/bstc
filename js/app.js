var weekly = [];
var weekly_data = [{ String: 1 }, 72, 72, 72, 72, 72, 72, 72];
var dayName = [{ id: 72, tariff_id: 41, index: 1, name: 2 }];
let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 }
];
var obj = { id: 72, tariff_id: 41, index: 1, name: 2 };

var [a, b, c] = [25, 35, 45];
console.log(b);

function write(name, age, salary, cable) {
  console.log(name, age, salary, cable);
}

write("hossein ", 33, 15000, false);

function writeGood({ name, age, salary, cable }) {
  console.log(name, age, salary, cable);
}

write({ name: "hossein ", age: 33, salary: 15000, cable: false });

//Function names should say what they do
//bad
function addToDate(date, month) {
  // ...
}

const date = new Date();

// It's hard to tell from the function name what is added
addToDate(date, 1);

//good
function addMonthToDate(month, date) {
  // ...
}

const date1 = new Date();
addMonthToDate(1, date);

//Remove duplicate code
//bad
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
    };

    render(data);
  });
}

//good
function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    const data = {
      expectedSalary,
      experience
    };

    switch (employee.type) {
      case "manager":
        data.portfolio = employee.getMBAProjects();
        break;
      case "developer":
        data.githubLink = employee.getGithubLink();
        break;
    }

    render(data);
  });
}

//Set default objects with Object.assign
//bad
const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellable =
    config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);

//good
const menuConfig1 = {
  title: "Order",
  // User did not include 'body' key
  buttonText: "Send",
  cancellable: true
};

function createMenu(config) {
  let finalConfig = Object.assign(
    {
      title: "Foo",
      body: "Bar",
      buttonText: "Baz",
      cancellable: true
    },
    config
  );
  return finalConfig;
  // config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}

createMenu(menuConfig1);

//Don't use flags as function parameters
//Flags tell your user that this function does more than one thing. Functions should do one thing. Split out your functions if they are following different code paths based on a boolean.
//bad
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

//good
function createFileg(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}

//Avoid Side Effects (part 1)
//bad
let name = "Ryan McDermott";

function splitIntoFirstAndLastName() {
  name = name.split(" ");
}

splitIntoFirstAndLastName();

console.log(name); // ['Ryan', 'McDermott'];

//good
function splitIntoFirstAndLastName(names) {
  return names.split(" ");
}

const names = "Ryan McDermott";
const newName = splitIntoFirstAndLastName(names);

console.log(names); // 'Ryan McDermott';
console.log(newName); // ['Ryan', 'McDermott'];

//javascript has 3 Refrence Type ===> 1-Array 2-Object 3-Function
var numb = [1, 2, 3];
var sum = numb.reduce((pv, cv) => {
  console.log(pv, cv);
  return pv + cv;
});
console.log(sum);

//Encapsulate conditionals
//bad

if (fsm.state === "fetching" && isEmpty(listNode)) {
  // ...
}

//good
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === "fetching" && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}

//Avoid negative conditionals
//bad
function isDOMNodeNotPresent(node) {
  // ...
}

if (!isDOMNodeNotPresent(node)) {
  // ...
}

//good
function isDOMNodePresent(node) {
  // ...
}

if (isDOMNodePresent(node)) {
  // ...
}

//Avoid conditionals
//This seems like an impossible task. Upon first hearing this, most people say, "how am I supposed to do anything without an if statement?" The answer is that you can use polymorphism to achieve the same task in many cases. The second question is usually, "well that's great but why would I want to do that?" The answer is a previous clean code concept we learned: a function should only do one thing. When you have classes and functions that have if statements, you are telling your user that your function does more than one thing. Remember, just do one thing.
//bad
class Airplane {
  // ...
  getCruisingAltitude() {
    switch (this.type) {
      case "777":
        return this.getMaxAltitude() - this.getPassengerCount();
      case "Air Force One":
        return this.getMaxAltitude();
      case "Cessna":
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}

//good
class Airplane {
  // ...
}

class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}

class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}

class Cessna extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}

//Avoid type-checking (part 1)
//JavaScript is untyped, which means your functions can take any type of argument. Sometimes you are bitten by this freedom and it becomes tempting to do type-checking in your functions. There are many ways to avoid having to do this. The first thing to consider is consistent APIs.
//bad
function travelToTexas(vehicle) {
  if (vehicle instanceof Bicycle) {
    vehicle.pedal(this.currentLocation, new Location("texas"));
  } else if (vehicle instanceof Car) {
    vehicle.drive(this.currentLocation, new Location("texas"));
  }
}

//good
function travelToTexas(vehicle) {
  vehicle.move(this.currentLocation, new Location("texas"));
}

//Avoid type-checking (part 2)
//If you are working with basic primitive values like strings and integers, and you can't use polymorphism but you still feel the need to type-check, you should consider using TypeScript. It is an excellent alternative to normal JavaScript, as it provides you with static typing on top of standard JavaScript syntax. The problem with manually type-checking normal JavaScript is that doing it well requires so much extra verbiage that the faux "type-safety" you get doesn't make up for the lost readability. Keep your JavaScript clean, write good tests, and have good code reviews. Otherwise, do all of that but with TypeScript (which, like I said, is a great alternative!).
//bad
function combine(val1, val2) {
  if (
    (typeof val1 === "number" && typeof val2 === "number") ||
    (typeof val1 === "string" && typeof val2 === "string")
  ) {
    return val1 + val2;
  }

  throw new Error("Must be of type String or Number");
}

//good
function combine(val1, val2) {
  return val1 + val2;
}

//Don't over-optimize
//Modern browsers do a lot of optimization under-the-hood at runtime. A lot of times, if you are optimizing then you are just wasting your time. There are good resources for seeing where optimization is lacking. Target those in the meantime, until they are fixed if they can be.
//bad
// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}

//good
for (let i = 0; i < list.length; i++) {
  // ...
}

//Objects and Data Structures
//Use getters and setters
//Using getters and setters to access data on objects could be better than simply looking for a property on an object. "Why?" you might ask. Well, here's an unorganized list of reasons why:
//When you want to do more beyond getting an object property, you don't have to look up and change every accessor in your codebase.
//Makes adding validation simple when doing a set.
//Encapsulates the internal representation.
//Easy to add logging and error handling when getting and setting.
//You can lazy load your object's properties, let's say getting it from a server.
//bad
function makeBankAccount() {
  // ...

  return {
    balance: 0
    // ...
  };
}

const account = makeBankAccount();
account.balance = 100;

//good
function makeBankAccount() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    // ...
    getBalance,
    setBalance
  };
}

const account = makeBankAccount();
account.setBalance(100);

//
//
//bad
