// write code here
let a = undefined;
let b = null;
let c = b + '4 2';
console.log(c);//null4 2
d = Number(a);
e = Number(b);
f= Number(c);
console.log(d);//NaN ค่า Number ของ undefined ได้ NaN
console.log(e);//0 ค่า Number ของ null เป็น 0 
console.log(f);//NaN เนื่องจาก c = null + '4 2' null ถูกแปลเป็น string null4 2 เมื่อใช้ number จึงได้ NaN เนื่องจากเป็นข้อความที่มีตัวอักษร