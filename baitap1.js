console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*");
console.log("\t\"Bai tap so 1\"");

console.log("\tYEU CAU SO 1","\"\nXuất đầy đủ các thông tin trên với định dạng đẹp\"");

let user={tenDangNhap:"nguyendu1999@gmail.com",
    matKhau:"123Abc",   
    soDienThoai:"0707082029"}

function xuat(){
    console.log("Ten dang nhap cua ban la: "+user.tenDangNhap+
    "\n"+"Mat khau cua ban la: "+user.matKhau+
    "\n"+"So dien thoai cua ban la: "+user.soDienThoai);
}

user.tenDangNhap="admin.javascript.yahoo.vn";
user.matKhau="Admin123$%^";
user.soDienThoai="0729829382"
xuat();

 


console.log("\tYEU CAU SO 3","\"\n Cho biết số nút của số điện thoại (lấy tổng các chữ số chia lấy dư cho 10).\"");
user.soDienThoai[0,7,2,9,8,2,9,3,8,2];

// let s1=parseInt(user.soDienThoai[0]);
// let s2=parseInt(user.soDienThoai[1]);
// let s3=parseInt(user.soDienThoai[2]);
// let s4=parseInt(user.soDienThoai[3]);
// let s5=parseInt(user.soDienThoai[4]);
// let s6=parseInt(user.soDienThoai[5]);
// let s7=parseInt(user.soDienThoai[6]);
// let s8=parseInt(user.soDienThoai[7]);
// let s9=parseInt(user.soDienThoai[8]);
// let s10=parseInt(user.soDienThoai[9]);

// console.log("So nut cua std la:",(s1+s2+s3+s4+s5+s6+s7+s8+s9+s10)%10);

let tong=0;
for(let i=0;i<user.soDienThoai.length;i++){
    let bien=parseInt(user.soDienThoai[i]);
    tong+=bien;
}

console.log("So nut la: "+tong%10);
