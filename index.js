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
        ketqua_b4='ko có giá trị nào!!!(-1)'
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
// var arrmang=[1,2,3,4,5,6];
// console.log(arrmang);
// arrmang[2]='11';
// console.log(arrmang);
// a=arrmang[3];
// console.log(a);
//BT6: đổi chổ:
document.getElementById('btnDoiCho').onclick=function(){
    //input: vtri 1, vitri 2.
    var in1=Number(document.getElementById('vitri1').value);
    var in2=Number(document.getElementById('vitri2').value);
    //out: vtri 
    var ketqua_b6='';
    //progress
    var tam=arrNumber[in1];
    arrNumber[in1]=arrNumber[in2];
    arrNumber[in2]=tam;
    ketqua_b6=arrNumber;
    document.getElementById('ketqua_b6').innerHTML='mảng sau khi đổi là: '+ ketqua_b6;
}
//Bài 7:
document.getElementById('btnSapXep').onclick=function(){
    //input: mảng arrNumber
    //output: html='';
    var html='';
    var arrSort=arrNumber.sort(function(vt2,vt1){
        return vt2-vt1;
    })
    html=arrSort;


    document.getElementById('ketqua_b7').innerHTML='Mảng sau khi sắp xếp : '+html;

}
//BT8:
document.getElementById('btnTimsoNT').onclick=function(){
    //in arrNumber
    //out: nt='';
    var iso=0;
    var ketQua='';
    for(var index=0; index<arrNumber.length;index++){
        iso=arrNumber[index];
        var kiemtra=kiemTraSoNguyenTo(iso);
        if(iso>2&&kiemtra){
            ketQua=iso;
            break;
        }else{
            ketQua=-1;
        }
    }
     
    document.getElementById('ketqua_b8').innerHTML='So nguyen to đầu tiên là: '+ketQua;
}
function kiemTraSoNguyenTo(so){
    //Biến kiểm tra là out: đúng là số nguyên tố:true, sai là false;
    var kiemtra=true;
    for(var uoc=2;uoc<=so/2;uoc++){
        if(so%uoc===0){
            kiemtra=false;
            break;
        }
    }
    return kiemtra;
}
//BT9:
var arrN=[];
document.getElementById('btnThemSoN').onclick=function(){
    var iso=Number(document.getElementById('Nhapso').value);
    var ketQua='';
    arrN.push(iso);
    ketQua='[' + arrN + ']';
    document.getElementById('ketqua_b9_1').innerHTML=ketQua;
}
document.getElementById('btnDemSo').onclick=function(){
    //in arrN
    //out: n=0;
    var ketquab9=0;
    dem=0;
    for(var index=0; index<arrN.length;index++){
        if(arrN[index]=Number.isInteger(arrN[index])){
            dem++;
        }
    }
    ketquab9+=dem;
    document.getElementById('ketqua_b9').innerHTML='Có :'+ketquab9+ ' Số nguyên!!';
}
//BT10: So sánh âm dương
document.getElementById('btnSoSanh').onclick=function(){
    //input arrNumber;
    var ketQua='';
    var demAm=0;
    var demDuong=0;
    for(var index=0; index<arrNumber.length;index++){
        if(arrNumber[index]<0){
            demAm++;
        }else{
            demDuong++;
        }
    }
    if(demAm==demDuong){
        ketQua='Số âm = số Dương';
    }else if(demAm<demDuong){
        ketQua='Số âm < số Dương';
    }else{
        ketQua='Số âm > số Dương';
    }
document.getElementById('ketqua_b10').innerHTML=ketQua;
}