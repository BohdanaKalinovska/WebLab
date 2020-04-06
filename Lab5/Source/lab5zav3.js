var num1 = "12345";
var num2 = "23257";

function process(number){
	var zm = 1;
	for(var i=0; i<number.length+1; i++){
		if(number[i]<number[i+1])
			zm += 1;
	}

	if(zm == number.length){
		return true;
	}else{
		return false;
	}
}
console.log("-------Завдання №3-------");
console.log("Цифра:"+ num1 + "->" + process(num1));
console.log("Цифра:"+ num2 + "->" + process(num2));
