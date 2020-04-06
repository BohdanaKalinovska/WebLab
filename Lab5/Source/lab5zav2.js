//Горизонтальний
var array1 = [
	["A","A"],
	["B","B"],
	["C","C"]
];

//Вертикальний
var array2 = [
	["A","B"],
	["A","B"],
	["A","B"]
];

//Діагональний зліва
var array3 = [
	["A","B","C"],
	["C","A","B"],
	["B","C","A"],
	["A","B","C"]
];

//Діагональний справа
var array4 = [
	["A","B","C"],
	["B","C","A"],
	["C","A","B"],
	["A","B","A"]
];

//Масив який будемо порівнювати з заданими №1
var new_array1 = [
	["A","A"],
	["B","B"],
	["C","C"]
];

//Масив який будемо порівнювати з заданими №2
var new_array2 = [
	["A","B","C"],
	["B","C","A"],
	["C","A","B"],
	["C","B","C"]
];

function comparison(array, array1, array2, array3, array4){
	var zm1 = 0;
	var zm2 = 0;
	var zm3 = 0;
	var zm4 = 0;

	//Перевіряємо тільки масив 1 і 2 
	if(array[0].length == 2){
		//Перевіряємо масив 1 
		for(var i=0; i<array.length; i++){
			for(var j=0; j<array[1].length; j++){
				if(array[i][j] == array1[i][j]){
					zm1 +=1;
				}else{
					break;
				}
			}
		} 
		//Перевіряємо масив 2
		for(var i=0; i<array.length; i++){
			for(var j=0; j<array[1].length; j++){
				if(array[i][j] == array2[i][j]){
					zm2 +=1;
				}else{
					break;
				}
			}
		}

		if (zm1 == array1.length * array1[1].length || zm2 == array2.length * array2[1].length) {
			return true;
		}else{
			return false;
		}
	}

	//Перевіряємо тільки масив 3 і 4 
	if(array[0].length == 3){
		//Перевіряємо масив 3 
		for(var i=0; i<array.length; i++){
			for(var j=0; j<array[1].length; j++){
				if(array[i][j] == array3[i][j]){
					zm3 +=1;
				}else{
					break;
				}
			}
		} 
		//Перевіряємо масив 4
		for(var i=0; i<array.length; i++){
			for(var j=0; j<array[1].length; j++){
				if(array[i][j] == array4[i][j]){
					zm4 +=1;
				}else{
					break;
				}
			}
		}

		if (zm3 == array3.length * array3[1].length || zm4 == array4.length * array4[1].length) {
			return true;
		}else{
			return false;
		}
	}

	if(array[0].length > 3){
		return "Масив не співпадає, його не існує в базі";
	}

}


console.log("-------Завдання №2-------");
console.log("Масив 1: ");
console.log(new_array1[0][0] + "," + new_array1[0][1]);
console.log(new_array1[1][0] + "," + new_array1[1][1]);
console.log(new_array1[2][0] + "," + new_array1[2][1]);

console.log("Відповідь:" + comparison(new_array1, array1, array2, array3, array4));

console.log("Масив 2: ");
console.log(new_array2[0][0] + "," + new_array2[0][1] + "," + new_array2[0][2]);
console.log(new_array2[1][0] + "," + new_array2[1][1] + "," + new_array2[1][2]);
console.log(new_array2[2][0] + "," + new_array2[2][1] + "," + new_array2[2][2]);
console.log(new_array2[3][0] + "," + new_array2[3][1] + "," + new_array2[3][2]);

console.log("Відповідь:" + comparison(new_array2, array1, array2, array3, array4));
console.log(" ");

