let obj = {
    "10001" : {
        "Firstlastname": "นางสาวชนิสา ไกรรอด",
        "Department" : "ไอที",
        "position" : "System Engineer",
        "salary" : 42000 ,
        "Bonus Ranking" : "S"
},
    "10002" : {
        "Firstlastname": "นายวศพล สิริอนันต",
        "Department" : "ไอที",
        "position" : "System Engineer",
        "salary" : 13000,
        "Bonus Ranking" : "A"
},
    "10003" : {
        "Firstlastname": "นางจิราพร อินทรประเสริฐ",
        "Department" : "ฝ่ายบุคคล",
        "position" : "HR",
        "salary" : 9000,
        "Bonus Ranking" : "C"
},
    "10004" : {
        "Firstlastname": "นางสาวพิมพา กาญจนมาศ",
        "Department" : "ฝ่ายบุคคล",
        "position" : "HR",
        "salary" : 21000 ,
        "Bonus Ranking" : "B"
},
    "10005" : {
        "Firstlastname": "นายจิรโชติ วัฒนโกศล",
        "Department" : "ฝ่ายบุคคล",
        "position" : "HR",
        "salary" : 22000,
        "Bonus Ranking" : "A"
},
    "10006" : {
        "Firstlastname": "นายธัชพล ขจรเกียรติสกุล",
        "Department" : "การเงิน",
        "position" : "Account",
        "salary" : 12000,
        "Bonus Ranking" : "S"
},
    "10007" : {
        "Firstlastname": "นายธนวิทย สุวรรณโชติ",
        "Department" : "การเงิน",
        "position" : "Account",
        "salary" : 14000,
        "BonusRanking" : "A"
},
    "10008" : {
        "Firstlastname": "นางพัชรียา สําราญทรัพย์",
        "Department" : "การเงิน",
        "position" : "Account",
        "salary" : 50000,
        "Bonus Ranking" : "C"
},
    "10009" : {
        "Firstlastname": "นางสาวขวัญชนก ธาดาวรวงศ์",
        "Department" : "ไอที",
        "position" : "System Engineer",
        "salary" : [16000],
        "Bonus Ranking" : "A"
}
};

let sum1 = 0 // โบนัสพนักงาน
let sum2 = 0 // โบนัสที่ต้องจ่ายทั้งหมด
let sum3 = 0 // เก็บค่าผลรวมเงินเดือนพนักงาน 12 เดือน
let sum4 = 0 // รายได้สุทธิต่อปี
let sum5 = 0 // ร่ายจ่ายต่อปี
let sum6 = 0 // ภาษีที่ต้องจ่าย

for(i=0;i<obj.length;i++){
    if(obj[i].BonusRanking== "S"){
        sum1 = obj[i].salary*1.6;
        sum2 += sum1;
    }else if(obj[i].BonusRanking == "A"){
        sum1 = obj[i].salary*1.3;
        sum2 += sum1;
    }else if(obj[i].BonusRanking== "B"){
        sum1 = obj[i].salary*1.0;
        sum2 += sum1;
    }else if(data[i].BonusRanking == "C"){
        sum1 = obj[i].salary*0.8;
        sum2 += sum1;
    }
    sum3 = obj[i].salary*12;
    sum4 = sum3+sum2
    sum5 += sum4;
    if(sum3<300000){
    }else if(sum3>=300000&&sum3<=600000){
        sum6 = sum3*0.1;
        sum6 += sum6;
    }else if(sum3>=600000&&sum3<=1000000){
        sum6 = sum3*0.25;
        sum6 += sum6;
    }else if(sum3>1000000){
        sum6 = sum3*0.35;
        sum6 += sum6;
    }
    console.log(obj[i].Firstlastname,"มีรายได้สุทธิต่อปี =",sum4,"บาท","ต้องจ่ายภาษี",sum6,"บาท","ได้โบนัส",sum1);
}

console.log("==========================================================================================================\n")

console.log("พนักงานแผนก ไอที")
for(i=0;i<obj.length;i++){
    if(obj[i].Department=="ไอที"){
        console.log(obj[i].Firstlastname,"ภาษีที่ต้องจ่าย",sum6);
    }
}
console.log("==========================================================================================================\n")

console.log("ผลประเมิน S")
for(i=0;i<obj.length;i++){
    if(obj[i].BonusRanking=="S"){
        console.log(obj[i].Firstlastname,"ผลประเมิน",obj[i].BonusRanking);
    }
}

console.log("บริษัทต้องจ่ายภาษีทั้งหมด :",sum6)
console.log("โบนัสที่ต้องให้พนักงานทั้งหมด :",sum2)
console.log("รายจ่ายต่อปีของบริษัท :",sum5)