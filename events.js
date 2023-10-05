function onClick(event) {
  console.log("I am clicked!")
  console.log(event);
}

function onSubmit() {
  const data = document.getElementById("myinput").value;
  validate(data);
  localStorage.setItem("key", data);
}

function onChange(event) {
  const data = event.target.value;
  validate(data);
}

function validate(data) {
  if (!data.includes("@")){
    document.getElementById("error_msg").innerHTML = "Wrong email!"
  } else {
    document.getElementById("error_msg").innerHTML = ""
  }
}