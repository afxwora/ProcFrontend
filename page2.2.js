const choice1 = document.getElementById('h_menu1');
const choice2 = document.getElementById('h_menu2');
const choice3 = document.getElementById('h_menu3');
const cl1 = document.getElementById('choice-left1');
const cl2 = document.getElementById('choice-left2');
const cl3 = document.getElementById('choice-left3');
const show_data = document.getElementById('choice-data');

function hover1(){
    choice1.style.backgroundColor = "rgba(120, 40, 253, 1)";
    choice1.style.color = "white";
}
function m_out1(){
    choice1.style.backgroundColor = "";
    choice1.style.color = "";

}
function hover2(){
    choice2.style.backgroundColor = "rgba(120, 40, 253, 1)";
    choice2.style.color = "white";
}
function m_out2(){
    choice2.style.backgroundColor = "";
    choice2.style.color = "";

}
function hover3(){
    choice3.style.backgroundColor = "rgba(120, 40, 253, 1)";
    choice3.style.color = "white";
}
function m_out3(){
    choice3.style.backgroundColor = "";
    choice3.style.color = "";

}
function select1(){
    cl1.style.backgroundColor = "rgba(255, 201, 87, 1)";
    cl1.style.color = "black";
    cl1.style.borderRadius = "0 0 50px 0 "
    cl2.style.backgroundColor = "";
    cl2.style.color = "";
    cl2.style.borderRadius = ""
    cl3.style.backgroundColor = "";
    cl3.style.color = "";
    cl3.style.borderRadius = ""
    show_data.innerHTML = "<center><h4 class='mt-3' style='color: rgba(0, 0, 0, 1);'>วิชาการ</h4></center> <p>lorem</p>"; 
}
function select2(){
    cl2.style.backgroundColor = "rgba(255, 201, 87, 1)";
    cl2.style.color = "black";
    cl2.style.borderRadius = "0 0 50px 0 "
    cl1.style.backgroundColor = "";
    cl1.style.color = "";
    cl1.style.borderRadius = ""
    cl3.style.backgroundColor = "";
    cl3.style.color = "";
    cl3.style.borderRadius = ""
    show_data.innerHTML = "<center><h4 class='mt-3' style='color: rgba(0, 0, 0, 1);'>งานคุณภาพนิสิต</h4></center>"; // ใส่ข้อมูลตรงนี้
}
function select3(){
    cl3.style.backgroundColor = "rgba(255, 201, 87, 1)";
    cl3.style.color = "black";
    cl3.style.borderRadius = "0 0 50px 0 "
    cl1.style.backgroundColor = "";
    cl1.style.color = "";
    cl1.style.borderRadius = ""
    cl2.style.backgroundColor = "";
    cl2.style.color = "";
    cl2.style.borderRadius = ""
    show_data.innerHTML = "<center><h4 class='mt-3' style='color: rgba(0, 0, 0, 1);'>อาจารย์ที่ปรึกษา</h4></center>"; // ใส่ข้อมูลตรงนี้
}