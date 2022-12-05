menuListArray = ["Pizza Vegetariana",
                  "Pizza portuguesa",
                  "Pizza de calabresa",
                "Pizza de bacon",
                "Pizza de quatro queijos",
            "Pizza de carne seca"];

function getMenu(){
var htmldata;
menuListArray.sort();
for(var i=0; i< menuListArray.length; i++){
    htmldata= htmldata+menuListArray[i] +"<br>"

}
document.getElementById("displayMenu").innerHTML=htmldata

}

function addItem(){
var htmldata;
var imgtegs= '<img id="im1" src="pizza.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0; i<menuListArray.length; i==)
{ htmldata=htmldata+imgtegs+menuListArray[i]+'<br>';

}
document.getElemetById("displyAddedMenu").innerHTML=htmldata;


}

function addTop(){
menulistarray.push(item);
additem();
}