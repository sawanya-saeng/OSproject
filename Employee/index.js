$(document).ready(function(){
    $("#content").load('./Components/foodtype.html');
    createCart();
});
var type;
var uuid = new Date().getTime();
function foodList(value){
    type = value;
    $("#content").load("./Components/foodlist.html");
    console.log(type);
}

function toFoodType(){
    $("#content").load("./Components/foodtype.html");
}

function toFoodOrder(){
    $("#content").load("./Components/order.html");
}

function createCart(){
    console.log("send");
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }
    xml.open("GET","http://localhost:27580/createCart?uuid="+uuid);
    xml.send();
}

function onConfirm(){
    var targetBg = document.getElementById("backgroundTable");
    var targetBox = document.getElementById('tableConfirm');

    targetBox.style.display = 'none';
    targetBg.style.display = 'none';

    var tableValue = document.getElementById('tableValue').value;
    console.log(tableValue);

    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            resetOrder();
        }
    }
    xml.open("GET","http://10.0.2.15:27580/sendOrder?uuid="+uuid+"&table="+tableValue);
    xml.send();
}