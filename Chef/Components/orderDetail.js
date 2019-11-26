$(document).ready(function () {
    loadOrder();
});

function loadOrder() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonData = JSON.parse(this.responseText);
            genOrder(jsonData);
        }
    }
    xml.open("GET", "http://172.20.10.5:27580/getOrderDetail?id=" + order_id);
    xml.send();
}

function genOrder(Obj) {
    var code = "";
    var target = document.getElementById('order-content');
    for (let i = 0; i < Obj['orders'].length; i++) {
        code += '<tbody>' +
            '<tr>' +
            '<th><img style="height: 5em" src="../assets/' + Obj["orders"][i]["type"] + '/' + Obj["orders"][i]["path"] + '"></th>' +
            '<th>' + Obj["orders"][i]["name"] + '</th>' +
            '<th>' + Obj["orders"][i]["price"] + '</th>' +
            '<th>' + Obj["orders"][i]["num"] + '</th>' +
            '<th>' + (Obj["orders"][i]["price"] * Obj["orders"][i]["num"]) + '</th>' +
            '</tr>' +
            '</tbody>'
    }
    target.insertAdjacentHTML('beforeend', code);
}

function toHome() {
    $("#content").load("index.html");
}

function confirmOrder() {
    if (confirm("ยืนยันการรับออเดอร์")) {
        var xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                toHome();
            }
        }
        xml.open("GET", "http://172.20.10.5:27580/confirmOrder?id=" + order_id);
        xml.send();
    }
}