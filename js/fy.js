var firstName = 25;
var lastName = null;
var company = "";
var employee = undefined;
var undefined = 1256;
const a = "hello";

if (a !== null) {
  console.log("✅ a is NOT null");
} else {
  console.log("⛔️ a is null");
}
var obj = { name: "hossein", age: 26 };
var obj2 = {};
console.log("check object length");
console.log(Object.keys(obj).length === 0);
console.log(Object.keys(obj));
console.log("---------------");
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof company);
console.log("null=== lastName");
console.log(null === lastName);
console.log(typeof lastName);
console.log("null=== company");
console.log(null === company);
console.log(null == company);
console.log(typeof company);
console.log("null === undefined");
console.log(null === undefined);
console.log(null == undefined);
console.log("employee === company");
console.log(typeof company);
console.log(typeof employee);
console.log(employee === company);
console.log(employee == company);

if (!company) {
  console.log(
    `hossein the value of company is ${company} it should not works if it is null or undefined or''empty string or 0 zero or false.`
  );
}
console.log("we are summarize the problem");
console.log(typeof employee);
if (1 === 1) {
  var chkUn = company == undefined;
  var chknull = company == null;
  console.log(`it works for chkUn ${chkUn}`);
  console.log(`it works for chknull ${chknull}`);
} else {
  console.log("it dose not works");
}
/* Since null == undefined is true, the following statements will catch both null and undefined */
// if (firstName == null) {
//   console.log('Variable "firstName" is undefined.');
// }
// if (lastName == null) {
//   console.log('Variable "lastName" is null.');
// }

// /* Since null === undefined is false, the following statements will catch only null or undefined  */
// if (typeof comment === "undefined") {
//   console.log('Variable "comment" is undefined.');
// } else if (comment === null) {
//   console.log('Variable "comment" is null.');
// }
var tarf = [
  { tarf: "3", clock: "2022-12-12", mdrTotal: 13.19, tarfType: "other_uses" },
  { tarf: "5", clock: "2022-12-12", mdrTotal: 0, tarfType: "general" },
  { tarf: "1", clock: "2022-12-12", mdrTotal: 36.708, tarfType: "homemade" },
  { tarf: "1", clock: "2022-12-13", mdrTotal: 38.229, tarfType: "homemade" },
  { tarf: "5", clock: "2022-12-13", mdrTotal: 0, tarfType: "general" },
  { tarf: "3", clock: "2022-12-13", mdrTotal: 14.058, tarfType: "other_uses" },
  { tarf: "3", clock: "2022-12-14", mdrTotal: 9.681, tarfType: "other_uses" },
  { tarf: "1", clock: "2022-12-14", mdrTotal: 40.558, tarfType: "homemade" },
  { tarf: "5", clock: "2022-12-14", mdrTotal: 0, tarfType: "general" },
  { tarf: "5", clock: "2022-12-15", mdrTotal: 0, tarfType: "general" },
  { tarf: "1", clock: "2022-12-15", mdrTotal: 43.937, tarfType: "homemade" },
  { tarf: "3", clock: "2022-12-15", mdrTotal: 10.284, tarfType: "other_uses" }
];
console.log(
  "----------------------------------------------------------------------------------------------------------------------"
);
var test = tarf.filter((x) => x.clock == "2022-12-12");
var getClock = tarf.map((x) => x.clock);
console.log("test");
console.log(test);
console.log("getClock");
console.log(getClock);

if (tarf.some((x) => x.clock != "2022-12-16")) {
  console.log("exist");
} else {
  console.log("not exist");
}
var myClock = [];
myClock.push("2022-12-12");
console.log("myClock.includes(tarfItem.clock)");
var tr = { clock: "2022-12-12" };
console.log(myClock.includes(tr.clock));
