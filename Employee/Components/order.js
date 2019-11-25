$(document).ready(function(){
    loadOrderList();
});

function loadOrderList() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var Obj = JSON.parse(this.responseText);
            geneOrderList(Obj);
        }
    }
    xml.open("GET","http://localhost:27580/getCartList?uuid="+uuid);
    xml.send();
}

function geneOrderList(orderList){
    console.log(orderList);
    var target = document.getElementById("cartList");
    var code = "";
    for(let i=0;i<orderList['orders'].length;i++){
        code += '<div class="col-12 p-0 mb-2 d-flex bg-white" style="height: 8em;">' +
                '<div class="h-100 pb-3 d-flex align-items-center" style="width: 30%;">' +
                '<img  class="h-75" src="../../assets/' + orderList['orders'][i]['type'] + '/' + orderList['orders'][i]['path'] + '">' +
                '</div>' +
                '<div class="h-100 d-flex align-items-center" style="width: 40%;">' +
                '<div class="w-100">' +
                '<h4 class="foodName" style="color: #7a614c">' + orderList['orders'][i]['name'] + '</h4>' +
                '<h5 class="foodPrice" style="color: #7a614c;">' + orderList['orders'][i]['price'] + '</h5>' +
                '</div>' +
                '</div>' +
                '<div class="d-flex justify-content-center align-items-center h-100" style="width: 30%;">' +
                '<h5 class="pt-2" style="color: #7a614c">'+orderList['orders'][i]['num']+'</h5>' +
                '</div>' +
                '</div>';
    }
    target.innerHTML = code;
}

function sendOrder(){
    var targetBg = document.getElementById("backgroundTable");
    var targetBox = document.getElementById('tableConfirm');

    targetBox.style.display = 'flex';
    targetBg.style.display = 'block';
}
