console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*");
console.log("\t\"Bai tap so 2\"");

console.log("\tYEU CAU SO 1","\"\n1. Xuất đầy đủ các thông tin trên với định dạng đẹp\"");

let Laptop={
    Tenmay:"Aspire ACER",
    Nam:"2020",
    cauhinh:{
        Ram:"128",
        HDD:"20",
        kichThuoc:{
            chieurong:"1080",
            chieucao:"518"
        }
    }
}

function xuat(){
    console.log("Ten may cua ban la: "+Laptop.Tenmay);
    console.log("Nam san xuat may tinh cua ban la: "+Laptop.Nam);
    console.log("Ram may tinh cua ban la: "+Laptop.cauhinh.Ram,"GB");
    console.log("Chieu rong mang hinh la: "+Laptop.cauhinh.kichThuoc.chieurong,"px");
    console.log("Chieu cao cua mang hinh la:"+Laptop.cauhinh.kichThuoc.chieucao,"px");
}
// xuat();

console.log("\tYEU CAU SO 2","\"\n2. Cập nhật: Cho phép thay đổi các thông tin bằng cách nhập dữ liệu cho từng thuộc tính.\"");

Laptop.Tenmay="ACER ASPIRE SEVEN",
Laptop.Nam="2000",
Laptop.cauhinh.Ram="512",
Laptop.cauhinh.kichThuoc.chieurong="1200",
Laptop.cauhinh.kichThuoc.chieucao="920",
xuat();

console.log("\tYEU CAU SO 3","\"\n3. Cho biết máy đã sản xuất bao lâu rồi.\"");

function namSanXuat() {
    return 2022-Laptop.Nam;
}

console.log("Nam san xuat cua may la: "+namSanXuat());

console.log("\tYEU CAU SO 4","\"\n4. Cho biết điểm của máy tính. Biết: Điểm = (3*RAM + 2*HDD)/5\"");

function diemMay() {
    return (3*Laptop.cauhinh.Ram)+(2*Laptop.HDD)/5;
}

console.log("Diem so may tinh cua ban la: "+diemMay());