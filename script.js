// Daivd Williams, JS 11-20, October 26, 2017

function tester() {

    //document.getElementById("output").innerHTML = sleepIn(true, false);
    document.getElementById("output").innerHTML = endOther("AbC", "HiaBc");
    //test third method, etc
}



function firstLast6(array){
    if(array.indexOf(6) == 0){
        return true;
    }
    if(array.lastIndexOf(6) == array.length - 1){
        return true;
    }
    return false;
}

function has23(array){
    if(array[0] == 2 || array[0] == 3){
        return true;
    }
    if(array[1] == 2 || array[1] == 3){
        return true;
    }
    return false;
}

function fix23(array){
    var location = array.indexOf(2);
    if(array[location + 1] == 3){
        array.charAt[location + 1] == 0;
    }
}
function countYZ(array){
    var count = 0;
    for(var i = 1; i < array.length; i++){
        if(array[i] == " " && array[i - 1].toLowerCase() == "y"){
            var count = count + 1;
        }
        if(array[i].toLowerCase() == " " && array[i - 1].toLowerCase() == "z"){
            var count = count + 1;
        }
    }
    if(array[array.length - 1].toLowerCase() == "y" || array[array.length - 1].toLowerCase() == "z"){
        count++;
    }
    return count;
}

function endOther(stringone, stringtwo){
    var stringOne = stringone.toLowerCase();
    var stringTwo = stringtwo.toLowerCase();
    if(stringOne == stringTwo.substring(stringTwo.length - stringOne.length, stringTwo.length)) {
        return true;
    }
    if(stringTwo === stringOne.substring(stringOne.length - stringTwo.length, stringOne.length)) {
        return true;
    }
    return false;
}

function starOut(str){
    var y = str.length;
    var string = "";
    for(var i = 0; i < y; i++){
        if(str[i] !== "*" && str[i + 1] !== "*" && str[i - 1] !== "*"){
            var string = string + str[i];
        }
    }
    return string;
}

function getSandwich(str){
    var locationone = str.indexOf("bread");
    var locationtwo = str.lastIndexOf("bread");
    var newstring = str.substring(locationone + 5, locationtwo);
    if(locationone == locationtwo){
        return "";
    }
    return newstring;
}
// scrap following
function canBalance(array){
    for(var i = 0; i < array.length; i++){
        var sumleft = 0;
        var sumright = 0;
        var j = 0;
        do[
            var sumleft = array[i - j]
            j++;
        ]while(array[i - j] !== -1);
        do[
            var sumleft = array[i + j]
            j++;
        ]while(array[i + j] !== -1);
        if(sumleft == sumright){
            return true;
        }
    }
    return false;
}

function canBalance(array){
    var leftSum = 0;
    var rightSum = 0;
    for(var i = 0; i < array.length; i++){
        rightSum += array[i];
    }
    for(var h = 0; h < array.length; h++){
        if(leftSum == rightSum){
            return true;
        }
        rightSum = rightSum - array[h];
        leftSum = leftSum + array[h];
    }
    return false;
}

var gfgf = [65, 4, 12, 4];

function getSum(total, gfgf) {
    return total + gfgf;


function countClumps(array){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == array[i + 1] && array[i] !== array[i - 1]){
            count++;
        }
    }
    return count;
}

function evenlySpaced(a, b, c){
    if(a <= b && a <= c){
        var small = a;
        if(b <= c){
            var medium = b;
            var large = c;
        }else{
            var medium = c;
            var large = b;
        }
    }
    if(b <= a && b <= c){
        var small = b;
        if(a <= c){
            var medium = a;
            var large = c;
        }else{
            var medium = c;
            var large = a;
        }
    }
    if(c <=  b && c <= a){
        var small = c;
        if(b <= a){
            var medium = b;
            var large = a;
        }else{
            var medium = a;
            var large = b;
        }
    }
    if(large - medium == medium - small){
        return true;
    }else{
        return false;
    }

}