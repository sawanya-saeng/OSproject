$(document).ready(function () {
    loadFoodList();
});

function loadFoodList() {
    var target = document.getElementById("foodlist");
    var foodMeatDetail = [{ name: "หมูนุ่ม", price: "50" }, { name: "หมูสไลซ์", price: "69" }];
    var foodMeatImage = ["5CeQk5KeJHe7giBMMKuP.jpg", "jiFmA4uPxFWBb8EXIbE9.jpg"];
    var foodSeaDetail = [{ name: "ปลาหมึก", price: "50" }, { name: "เนื้อปลา", price: "69" }];
    var foodSeaImage = ["6U4OftclPNFPfPItQZ74.jpg", "r5zuLgCkwnMm8Wvo00jJ.jpg"];
    var code = "";
    if (type == "Meat") {
        for (let i = 0; i < foodMeatDetail.length; i++) {
            code += '<div class="col-12 p-0 mb-2 d-flex bg-white" style="height: 8em;">' +
                '<div class="h-100 pb-3 d-flex align-items-center" style="width: 30%;">' +
                '<img  class="h-75" src="../../assets/' + type + '/' + foodMeatImage[i] + '">' +
                '</div>' +
                '<div class="h-100 d-flex align-items-center" style="width: 40%;">' +
                '<div class="w-100">' +
                '<h4 class="foodName" style="color: #7a614c">' + foodMeatDetail[i]['name'] + '</h4>' +
                '<h5 class="foodPrice" style="color: #7a614c;">' + foodMeatDetail[i]['price'] + '</h5>' +
                '<span class="foodPath" style="display:none">' + foodMeatImage[i] + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="d-flex justify-content-center align-items-center h-100" style="width: 30%;">' +
                '<a onclick="addToCart('+i+')" class="d-flex justify-content-center align-items-center" style="height: 3em;width:90%;padding: 5px 5px; background-color: #7a614c;border-radius: 8px;">' +
                '<h5 class="pt-2 text-white">เลือก</h5>' +
                '</a>' +
                '</div>' +
                '</div>';
        }
    }else{
        for(let i=0;i<foodSeaDetail.length;i++){
            code += '<div class="col-12 p-0 mb-2 d-flex bg-white" style="height: 8em;">' +
            '<div class="h-100 pb-3 d-flex align-items-center" style="width: 30%;">' +
            '<img class="h-75" src="../../assets/' + type + '/' + foodSeaImage[i] + '">' +
            '</div>' +
            '<div class="h-100 d-flex align-items-center" style="width: 40%;">' +
            '<div class="w-100">' +
            '<h4 class="foodName" style="color: #7a614c">' + foodSeaDetail[i]['name'] + '</h4>' +
            '<h5 class="foodPrice" style="color: #7a614c;">' + foodSeaDetail[i]['price'] + '</h5>' +
            '<span class="foodPath" style="display:none">' + foodSeaImage[i] + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="d-flex justify-content-center align-items-center h-100" style="width: 30%;">' +
            '<a onclick="addToCart('+i+')" class="d-flex justify-content-center align-items-center" style="height: 3em;width:90%;padding: 5px 5px; background-color: #7a614c;border-radius: 8px;">' +
            '<h5 class="pt-2 text-white">เลือก</h5>' +
            '</a>' +
            '</div>' +
            '</div>';
        }
    }

    target.insertAdjacentHTML('beforeend', code)
}

function addToCart(index){
    var food_name = document.getElementsByClassName('foodName')[index].innerText;
    var food_price = document.getElementsByClassName('foodPrice')[index].innerText;
    var food_path = document.getElementsByClassName('foodPath')[index].innerText;
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status){
            
        }
    }
    xml.open("GET","http://172.20.10.5:27580/addToCart?name="+food_name+"&price="+food_price+"&type="+type+"&path="+food_path+"&uuid="+uuid);
    xml.send();
}