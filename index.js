//

var arrNumber=[];
document.getElementById('btnThemSo').onclick=function(){

    var iso=Number(document.getElementById('nhapSoN').value);
    var ketQua='';
    arrNumber.push(iso);
    ketQua='[' + arrNumber + ']';
    document.getElementById('ketQua_1').innerHTML=ketQua;
}
//BT1: Tính tổng dương
document.getElementById('btnTinhTong').onclick=function(){
    //out
    var ketQua=0;
    //progress
    for(var index=0;index<arrNumber.length;index++){
        if(arrNumber[index]>0){
            ketQua+=arrNumber[index];
        }
    }
    //Xuất ra màn hình.
    document.getElementById('ketqua_b1').innerHTML=ketQua;

}
//BT2: Đếm số dương
document.getElementById('btnDiemSo').onclick=function(){
 //out
 var ketqua_b2=0;
 var dem=0;
 //progress
 for(var index=0; index<arrNumber.length;index++){
    if(arrNumber[index]>0){
        dem++;
    }
 }
 ketqua_b2+=dem;
 document.getElementById('ketqua_b2').innerHTML=ketqua_b2;

}
//BT3: Tìm số nhỏ nhất
document.getElementById('btnTimSoNhoNhat').onclick=function(){ 
    var ketqua_b3='';
    var min=arrNumber[0];
    var indexMin=0;
    for(var index=0; index<arrNumber.length;index++){
        if(arrNumber[index]<min){
            min=arrNumber[index];
            indexMin=index;
        }
    }
ketqua_b3=arrNumber[indexMin];
document.getElementById('ketqua_b3').innerHTML=ketqua_b3;
}
//BT4:Tìm số dương nhỏ nhất
document.getElementById('btnTimSoDuongNhoNhat').onclick=function(){
    var ketqua_b4='';
    var min=arrNumber[0];
    var indexMin=0;
    var arrDuong=[];
    for(var index=0; index<arrNumber.length;index++){
        if(arrNumber[index]>0){
            arrDuong.push(arrNumber[index]);
        }
    }
    if(arrDuong.length>=1){
        for(var index=0; index<arrDuong.length;index++){
            if(arrDuong[index]<min){
                min=arrDuong[index];
                indexMin=index;
            }
        }
    }else{
        ketqua_b4='ko có giá trị nào!!!'
    }
ketqua_b4=arrNumber[indexMin];
document.getElementById('ketqua_b4').innerHTML=ketqua_b4;
}
//BT5: Tìm số chẵn cuối cùng
document.getElementById('btnTimSoChanCuoiCung').onclick=function(){
    //out
    var ketQua_b5='';
    //progress
    for(var index=0;index<arrNumber.length;index++){
        if(arrNumber[index]%2==0){
            ketQua_b5=arrNumber[index];
        }
    }
    //Xuất ra màn hình.
    document.getElementById('ketqua_b5').innerHTML=ketQua_b5;

}