//Created By: William Charles See Ong C0797740, Ashray Pujari C0800447, Maria Theresa Corre C0784534, Amulya Baddam C0796372
//Charles- Change the validation DOM





function validateForm() {

  let pid = document.getElementById("Plant_Id").value;
  let name = document.getElementById("Plant_Name").value;
  let description = document.getElementById("Description").value;
  let price = document.getElementById("Price").value;
  let quantity = document.getElementById("Quantity").value;
  let collection_value;

  //if input plant name is blank alert pls fill out


  if (pid == "") {
    alert("Plant Id should be filled out");
    //Return False to Wont Submit
    return false;
  }

  if (name == "") {
    //Show Alert on Page
    alert("Plant name should be filled out");
    //Return False to Wont Submit
    return false;
  }
  //if input plant description is blank alert pls fill out
  if (description == "") {
    //Show Alert on Page
    alert("Description should be filled out");
    //Return False to Wont Submit
    return false;
  }
  //if input plant price is blank alert pls fill out
  if (price == "") {
    //Show Alert on Page
    alert("Price should be filled out");
    //Return False to Wont Submit
    return false;
  }
  //if input plant quantity is blank alert pls fill out
  if (quantity == "") {
    //Show Alert on Page
    alert("Quantity should be filled out");
    //Return False to Wont Submit
    return false;
  }
  //Show Alert on Page for successful
  alert("Successfully Submitted");
  var x = document.getElementsByTagName("form");
  //Prcoess submit form
  x[0].submit();
}