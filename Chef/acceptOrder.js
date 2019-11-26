$(document).ready(function(){
    loadOrderAccept();
});

var order_id = "";

function loadOrderAccept(){
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var jsonData = JSON.parse(this.responseText);
            genOrderAccpet(jsonData);
        }
    }
    xml.open("GET","http://localhost:27580/getAcceptList");
    xml.send();
}

function genOrderAccpet(Obj){
    var code = "";
    var target = document.getElementById('table-content-accept');
    for(let i=0;i<Obj.length;i++){
        console.log(Obj[i]);
        code += '<tbody>'+
                    '<tr>'+
                        '<th>ลำดับที่ '+(i+1)+'</th>'+
                        '<th>โต๊ะ '+Obj[i]['table']+'</th>'+
                        '<th>'+Obj[i]['orders'].length+' รายการ</th>'+
                        '<th><button onclick="deleteOrder('+"'"+Obj[i]['id']+"'"+')" type="button" class="btn btn-danger">ลบออเดอร์</button></th>'+
                    '</tr>'+
                '</tbody>'
        
    }
    target.insertAdjacentHTML('beforeend',code);
}

function deleteOrder(id){
    if(confirm("ยืนยัรการลบ ?")){
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                toHome();
            }
        }
        xml.open("GET","http://localhost:27580/deleteAccept?id="+id);
        xml.send();
    }
}