const tr = () => {
  console.log(0);
}

const y = tr;

function normal(pop) {
  const i = pop();
  return i;
}

console.log(normal(tr))

// parameters

const fun = (i, j, k) => {
  console.log(i + ", " + j + ", " + k)
}

fun(1,2,3,4)