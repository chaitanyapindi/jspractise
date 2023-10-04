var obj = {
  io: "p",
};

var onj = obj;

onj.io = "opo";

console.log(onj);
console.log(obj);

onj = {
  pop: "pop",
};
console.log(onj);
console.log(obj);

// React
var state = {
  name: "harsha",
  age: 100,
  gender: "male",
};

state = {
  name: state.name,
  age: 90,
  gender: state.gender,
};

var state2 = {
  name: "harsha",
  age: 100,
  gender: "male",
};

const fields = ["name", "age", "gender"];

state2 = { ...state2, age: 90 };
console.log(state2.name);

for (let i = 0; i < fields.length; i++) {
  console.log(state2[fields[i]]);
}

const print = (ele, index, totalList) => {
  console.log(totalList);
  console.log(state2[ele] + "-" + index);
};

fields.forEach(print);

const superPrint = () => {
  console.log("super print");
  return (ele, index, totalList) => {
    console.log(totalList);
    console.log(state2[ele] + "-" + index);
  };
};

fields.forEach(superPrint);

// superPrint executes first then returns the function which will be executed by foreach
fields.forEach(superPrint());

// Map example
const maps = ["harshaw", "keerthi", "chaitanya", "konda"];

const kfilters = maps.filter((e) => e.startsWith("k"));
const kmaps = maps.map((e, index) => {
  if (e.startsWith("k")) {
    return e + "-" + index;
  } else {
    return e;
  }
  // e.startsWith("k") ? e + "-" + index : e
});
const kfilters_kmaps = maps.filter((e) => e.startsWith("k")).map((e, index)=>e + "-" + index)

console.log(kfilters);
console.log(maps);
console.log(kmaps);
console.log(kfilters_kmaps)

if ("" || undefined || null || 0 || false) {
  console.log("i am true");
}
