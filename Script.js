function split() {
  let amount = document.getElementById("amount");
  let persons = document.getElementById("persons");
  let result = document.getElementById("result");
  let title = document.getElementById("title");
  if (persons.value < 2) {
    let bill = (amount.value / persons.value).toFixed(2);
    title.innerText = "Enter Minimum 2 persons to split 😝";
    title.style.fontSize = "28px";
    result.innerText = "";
  } else {
    let bill = (amount.value / persons.value).toFixed(2);
    title.innerText =
      "Bill was splitted successfully. Now check your pockets😝";
    title.style.fontSize = "23px";
    result.innerText = bill + " Rs";
    result.style.textDecoration = "underline";
    persons.value = " ";
    amount.value = " ";
  }
}
