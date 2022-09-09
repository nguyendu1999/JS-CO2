console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*");
console.log("\t\"Bai tap so 2\"");

console.log("\tYEU CAU SO 1","\"\n1. Xuất đầy đủ các thông tin trên với định dạng đẹp\"");


let Player={
    Ten:"Ronaldo",
    soAo:07,
    chiSoKyNang:{
    Sut:10,
    chuyen:10,
    danhDau:15
    }
}

function xuat(){
    console.log("Ten cau thu: "+Player.Ten);
    console.log("So ao cau thu: "+Player.soAo);
    console.log("Luc sut: "+Player.Sut);
    console.log("Duong chuyen: "+Player.chuyen);
    console.log("Danh dau: "+Player.danhDau);
}
xuat();

console.log("\tYEU CAU SO 2","\"\n2. Cập nhật: Cho phép thay đổi các thông tin bằng cách nhập dữ liệu cho từng thuộc tính.\"");

Player.Ten="Du-Nguyen-Admin";
Player.soAo="100";
Player.Sut="200";
Player.chuyen="250";
Player.danhDau="150";

xuat();

console.log("\tYEU CAU SO 3","\"\n\3. Cho biết chỉ số trung bình.\"");

function chiSoTrungBinh(){
    return (Player.Sut+Player.chuyen+Player.danhDau)/3;
}

console.log(chiSoTrungBinh());

console.log("\tYEU CAU SO 4","\"\n\4. Cho biết số áo có hợp lệ không. Số áo hợp lệ là số áo có tối đa 2 chữ số.\"");

function kiemTraAo() {
    let co2Kytu=Player.soAo.length <= 2 ?true:false;
    let khongPhaiSoAm = Player.soAo.length >=0 ?true:false;

    return co2Kytu && khongPhaiSoAm ?"hop le" : "khong hop le";
}

console.log(kiemTraAo());
