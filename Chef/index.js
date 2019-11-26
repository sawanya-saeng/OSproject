$(document).ready(function(){
    loadOrder();

});

var order_id = "";
var page = 1;

function loadOrder(){
    if(page == 1){
        var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var jsonData = JSON.parse(this.responseText);
            genOrder(jsonData);
        }
    }
    xml.open("GET","http://10.0.2.15:27580/getOrderList");
    xml.send();
    }
    
}
var updateLoop = setInterval(loadOrder, 1000);
function genOrder(Obj){
    var code = "";
    var target = document.getElementById('table-content');
    target.innerHTML = '<table id="table-content" class="table">'+
                        '<thead class="thead-light">'+
                            '<tr>'+
                                '<th>#</th>'+
                                '<th>โต๊ะ</th>'+
                                '<th>จำนวน</th>'+
                                '<th>จัดการ</th>'+
                            '</tr>'+
                        '</thead>'+
                    '</table>';
    for(let i=0;i<Obj.length;i++){
        console.log(Obj[i]);
        code += '<tbody>'+
                    '<tr>'+
                        '<th>ลำดับที่ '+(i+1)+'</th>'+
                        '<th>โต๊ะ '+Obj[i]['table']+'</th>'+
                        '<th>'+Obj[i]['orders'].length+' รายการ</th>'+
                        '<th><button onclick="orderDetail('+"'"+Obj[i]['id']+"'"+')" type="button" class="btn btn-success">ดูออเดอร์</button></th>'+
                    '</tr>'+
                '</tbody>'
        
    }
    target.insertAdjacentHTML('beforeend',code);
}

function orderDetail(id){
    page = 2;
    order_id = id;
    $("#content").load("./Components/orderDetail.html");
}

function toHome(){
    page = 1;
    $("#content").load("index.html");
}

function toSecond(){
    page = 3;
    $("#content").load("acceptOrder.html");
}