var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = map[s[i]];
        const next = map[s[i + 1]];
        if (next > curr) {
            sum -= curr;
        } else {
            sum += curr;
        }
    }
    return sum;
};

var convertToTitle = function(columnNumber) {
       const Letter = "ZABCDEFGHIJKLMNOPQRSTUVWXY";
    let str = ""
    while (columnNumber > 0) {
        str = Letter.charAt(columnNumber % 26) + str;
        columnNumber -= columnNumber % 26 == 0 ? 26 : columnNumber % 26;
        columnNumber /= 26;
    }
    return str;    
};
var intToRoman = function(num) {
    let str='';
    while(num>0){
        if(num>1000){
            str+='M';
            num=num-1000;
            console.log(num);
        }else if(num>=900&&num<1000){
            str+="CM";
            num=num-900;
            console.log(num);
        }else if(num>=500){
            str+='D';
            num=num-500;
            console.log(num);
        }else if(num>=400&&num<500){
            str+='CD';
            num=num-400;
            console.log(num);
        }else if(num>=100){
            str+='C';
            num=num-100;
            console.log(num);
        }else if(num>=90&&num<100){
            str+='XC';
            num=num-90;
            console.log(num);
        }else if(num>=50){
            str+='L';
            num=num-50;
            console.log(num);
        }else if(num>=40&&num<50){
            str+='XL';
            num=num-40;
            console.log(num);
        }else if(num>=10){
            str+='X';
            num=num-10;
            console.log(num);
        }else if(num==9&&num<10){
            str+='IX';
            num=num-9;
            console.log(num);
        }else if(num>=5){
            str+='V';
            num=num-5;
            console.log(num);
        }else if(num==4){
            str+='IV';
            num=num-4;
            console.log(num);
        }else if(num<4) {
            str+='I';
            num--;
            console.log(num);
        }
    }
    console.log(num);
    return str;
};