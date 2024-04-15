//div-main
let maindiv = document.createElement("div");
maindiv.setAttribute("class", "main");
document.body.append(maindiv);
//form
let formelem = document.createElement("form");
formelem.setAttribute("id", "form");
maindiv.append(formelem);
//div-heading
let headingdiv = document.createElement("div");
headingdiv.classList.add(
  "form-group",
  "d-flex",
  "flex-column",
  "justify-content-center",
  "align-items-center"
);
form.append(headingdiv);
//h1
let h1 = document.createElement("h1");
h1.setAttribute('id','title')
h1.innerHTML = "DOM Form";
headingdiv.append(h1);
//p
let p = document.createElement("p");
p.setAttribute('id','description')
p.innerHTML =
  "kindly fill the form below,";
headingdiv.append(p);
//div-firstname
let firstnamediv = document.createElement("div");
firstnamediv.classList.add("form-group");
form.append(firstnamediv);
let firstnamelabel = document.createElement("label");
firstnamelabel.setAttribute("for", "first-name");
firstnamelabel.innerHTML = "First Name ";
firstnamediv.append(firstnamelabel);
let firstnameinput = document.createElement("input");
firstnameinput.setAttribute("type", "text");
firstnameinput.setAttribute("id", "first-name");
firstnameinput.setAttribute("placeholder", "Enter First Name");
firstnameinput.setAttribute("required", "");
firstnamediv.append(firstnameinput);
//div-lastname
let lastnamediv = document.createElement("div");
lastnamediv.classList.add("form-group");
form.append(lastnamediv);
let lastnamelabel = document.createElement("label");
lastnamelabel.setAttribute("for", "last-name");
lastnamelabel.innerHTML = "Last Name ";
lastnamediv.append(lastnamelabel);
let lastnameinput = document.createElement("input");
lastnameinput.setAttribute("type", "text");
lastnameinput.setAttribute("id", "last-name");
lastnameinput.setAttribute("placeholder", "Enter Last Name");
lastnameinput.setAttribute("required", "");
lastnamediv.append(lastnameinput);
//div-address
let addressdiv = document.createElement("div");
addressdiv.classList.add("form-group");
form.append(addressdiv);
let addresslabel = document.createElement("label");
addresslabel.setAttribute("for", "address");
addresslabel.innerHTML = "Address ";
addressdiv.append(addresslabel);
let addressinput = document.createElement("textarea");
addressinput.setAttribute("id", "address");
addressinput.setAttribute("row", "4");
addressinput.setAttribute("cols", "30");
addressinput.setAttribute("placeholder", "Enter address");
addressinput.setAttribute("required", "");
addressdiv.append(addressinput);
//div-pincode
let pincodediv = document.createElement("div");
pincodediv.classList.add("form-group");
form.append(pincodediv);
let pincodelabel = document.createElement("label");
pincodelabel.setAttribute("for", "pincode");
pincodelabel.innerHTML = "pincode ";
pincodediv.append(pincodelabel);
let pincodeinput = document.createElement("input");
pincodeinput.setAttribute("type", "text");
pincodeinput.setAttribute("id", "pincode");
pincodeinput.setAttribute("placeholder", "Enter pincode");
pincodeinput.setAttribute("required", "");
pincodediv.append(pincodeinput);
//div-gender
let genderdiv = document.createElement("div");
genderdiv.classList.add(
  "form-group",
  "d-flex",
  "flex-column",
  "justify-content-center",
  "align-items-center"
);
form.append(genderdiv);
let genderp = document.createElement("p");
genderp.innerHTML = "Gender";
genderdiv.append(genderp);
//div-inside-gender
let insidegenderdiv = document.createElement("div");
insidegenderdiv.classList.add(
  "d-flex",
  "justify-content-center",
  "align-items-center"
);
form.append(insidegenderdiv);
//male
let maleinput = document.createElement("input");
maleinput.setAttribute("type", "radio");
maleinput.setAttribute("name", "gender");
maleinput.setAttribute("value", "Male");
maleinput.setAttribute("required", "");
insidegenderdiv.appendChild(maleinput);
let malelabel = document.createElement("label");
malelabel.innerHTML = "Male";
insidegenderdiv.appendChild(malelabel);
//female
let femaleinput = document.createElement("input");
femaleinput.setAttribute("type", "radio");
femaleinput.setAttribute("name", "gender");
femaleinput.setAttribute("value", "Female");
insidegenderdiv.appendChild(femaleinput);
let femalelabel = document.createElement("label");
femalelabel.innerHTML = "Female";
insidegenderdiv.appendChild(femalelabel);
//others
let othersinput = document.createElement("input");
othersinput.setAttribute("type", "radio");
othersinput.setAttribute("name", "gender");
othersinput.setAttribute("value", "others");
insidegenderdiv.appendChild(othersinput);
let otherslabel = document.createElement("label");
otherslabel.innerHTML = "others";
insidegenderdiv.appendChild(otherslabel);
//div-choose the food
let fooddiv = document.createElement("div");
fooddiv.classList.add(
  "form-group",
  "d-flex",
  "flex-column",
  "justify-content-center"
);
form.append(fooddiv);
let foodp = document.createElement("p");
foodp.innerHTML = "choose the food";
fooddiv.append(foodp);
//ul
let ul = document.createElement("ul");
fooddiv.append(ul);
//Sushi
let Sushiinput = document.createElement("input");
Sushiinput.setAttribute("type", "checkbox");
Sushiinput.setAttribute("name", "option");
Sushiinput.setAttribute("value", "Sushi");
ul.appendChild(Sushiinput);
let Sushilabel = document.createElement("label");
Sushilabel.innerHTML = "Sushi";
ul.appendChild(Sushilabel);
//pasta
let pastainput = document.createElement("input");
pastainput.setAttribute("type", "checkbox");
pastainput.setAttribute("name", "option");
pastainput.setAttribute("value", "pasta");
ul.appendChild(pastainput);
let pastalabel = document.createElement("label");
pastalabel.innerHTML = "pasta";
ul.appendChild(pastalabel);
//Tocos
let Tocosinput = document.createElement("input");
Tocosinput.setAttribute("type", "checkbox");
Tocosinput.setAttribute("name", "option");
Tocosinput.setAttribute("value", "Tocos");
ul.appendChild(Tocosinput);
let Tocoslabel = document.createElement("label");
Tocoslabel.innerHTML = "Tocos";
ul.appendChild(Tocoslabel);
//Pizza
let Pizzainput = document.createElement("input");
Pizzainput.setAttribute("type", "checkbox");
Pizzainput.setAttribute("name", "option");
Pizzainput.setAttribute("value", "Pizza");
ul.appendChild(Pizzainput);
let Pizzalabel = document.createElement("label");
Pizzalabel.innerHTML = "Pizza";
ul.appendChild(Pizzalabel);
//Biryani
let Biryaniinput = document.createElement("input");
Biryaniinput.setAttribute("type", "checkbox");
Biryaniinput.setAttribute("name", "option");
Biryaniinput.setAttribute("value", "Biryani");
ul.appendChild(Biryaniinput);
let Biryanilabel = document.createElement("label");
Biryanilabel.innerHTML = "Biryani";
ul.appendChild(Biryanilabel);
//State
let statediv = document.createElement("div");
statediv.classList.add("form-group");
form.append(statediv);
let statelabel = document.createElement("label");
statelabel.setAttribute("for", "state");
statelabel.innerHTML = "state ";
statediv.append(statelabel);
let stateinput = document.createElement("input");
stateinput.setAttribute("type", "text");
stateinput.setAttribute("id", "state");
stateinput.setAttribute("placeholder", "Enter state");
stateinput.setAttribute("required", "");
statediv.append(stateinput);
//country
let countrydiv = document.createElement("div");
countrydiv.classList.add("form-group");
form.append(countrydiv);
let countrylabel = document.createElement("label");
countrylabel.setAttribute("for", "country");
countrylabel.innerHTML = "country ";
countrydiv.append(countrylabel);
let countryinput = document.createElement("input");
countryinput.setAttribute("type", "text");
countryinput.setAttribute("id", "country");
countryinput.setAttribute("placeholder", "Enter country");
countryinput.setAttribute("required", "");
countrydiv.append(countryinput);
//submit
let sumbitdiv = document.createElement("div");
sumbitdiv.classList.add("form-group");
form.append(sumbitdiv);
let submitbutton = document.createElement("button");
submitbutton.setAttribute("id", "submit");
submitbutton.classList.add("btn", "btn-primary", "buttonstyle");
submitbutton.innerHTML = "Submit";
sumbitdiv.append(submitbutton);
//div-table
let tablediv = document.createElement("div");
tablediv.classList.add("table-responsive", "form-group");
form.append(tablediv);
//table
let tablemain = document.createElement("table");
tablemain.classList.add("table");
tablediv.append(tablemain);
//thead
let tablethead = document.createElement("thead");
tablemain.append(tablethead);
//tr
let tabletr = document.createElement("tr");
tablethead.append(tabletr);
//th
let Idfortable = document.createElement("th");
Idfortable.innerHTML = "Id";
tabletr.append(Idfortable);


let lastnamedata = document.createElement("th");
lastnamedata.innerHTML = "First Name";
tabletr.append(lastnamedata);

let firstnamedata = document.createElement("th");
firstnamedata.innerHTML = "Last Name";
tabletr.append(firstnamedata);

let Addressdata = document.createElement("th");
Addressdata.innerHTML = "Address";
tabletr.append(Addressdata);

let Pincodedata = document.createElement("th");
Pincodedata.innerHTML = "Pincode";
tabletr.append(Pincodedata);

let Genderdata = document.createElement("th");
Genderdata.innerHTML = "Gender";
tabletr.append(Genderdata);

let Fooddata = document.createElement("th");
Fooddata.innerHTML = "Food";
tabletr.append(Fooddata);

let Statedata = document.createElement("th");
Statedata.innerHTML = "State";
tabletr.append(Statedata);

let Countrydata = document.createElement("th");
Countrydata.innerHTML = "Country";
tabletr.append(Countrydata);

//tbody
let tablettbody = document.createElement("tbody");
tablemain.append(tablettbody);

//Geting all vales by Id

var myForm = document.getElementById("form");
var dataTableBody = document.querySelector(".table tbody");
let entryCounter = 1; 
myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var Address = document.getElementById("address").value;
  var Pincode = document.getElementById("pincode").value;
  var Gender = getSelectedRadioValue("gender");
  var State = document.getElementById("state").value;
  var Country = document.getElementById("country").value;
  var checkboxes = document.getElementsByName("option");
  var selectedOptions = [];


  if (!/^\d{6}$/.test(Pincode)) {
    alert("Pincode must be a 6-digit number.");
    return;
  }
  
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      selectedOptions.push(checkbox.value);
    }
  });

  if (selectedOptions.length >= 2) {
    selectedOptions.join(", ");
  } else {
    alert("Please select at least 2 options.");
    return;
  }

  updateTable(
    entryCounter,
    firstName,
    lastName,
    Address,
    Pincode,
    Gender,
    selectedOptions,
    State,
    Country
  );
  entryCounter++;
  myForm.reset();
});

function updateTable(
  entryId,
  firstName,
  lastName,
  Address,
  Pincode,
  Gender,
  selectedOptions,
  State,
  Country
) {
  var newRow = dataTableBody.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);
  var cell9 = newRow.insertCell(8);

  cell1.textContent = entryId; 
  cell2.textContent = firstName;
  cell3.textContent = lastName;
  cell4.textContent = Address;
  cell5.textContent = Pincode;
  cell6.textContent = Gender;
  cell7.textContent = selectedOptions;
  cell8.textContent = State;
  cell9.textContent = Country;
  cell1.style.color = "black";
}

function getSelectedRadioValue(name) {
  var radios = document.getElementsByName(name);

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }

  return null;
}
