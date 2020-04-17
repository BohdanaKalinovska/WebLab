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


function compare_length(arr, new_arr){
	if(arr.length !== new_arr.length)
		return false;
	else
		return true;

}

function compare(arr, new_arr){
	var z = 0;
	if(compare_length(arr, new_arr) == true){
		for (var i=0; i<arr.length; i++){
			for (var j=0; j<arr[1].length; j++){
				if(arr[i][j] == new_arr[i][j])
					z++;	
		}
	}

	if(z==(arr.length * arr[1].length))
		return true;
	else
		return false;
	}

	else
		return false; //Різна довжина масивів тому False
}

function result(array1, array2, array3, array4, arr){
	if(compare(array1, arr) == true)
		return "true - горизонтальний";
	else if(compare(array2, arr) == true)
		return "true - вертикальний";
	else if(compare(array3, arr) == true)
		return "true - діагональний зліва";
	else if(compare(array4, arr) == true)
		return "true - діагональний справа";
	else
		return "false - cпівпадінь не знайдено";
}


console.log("-------Завдання №2-------");
console.log("Масив 1: ");
console.log('(' + '[' + new_array1[0][0] + "," + new_array1[0][1] + ']' + ',');
console.log(' ' + '[' +new_array1[1][0] + "," + new_array1[1][1] + ']' + ',');
console.log(' ' + '[' +new_array1[2][0] + "," + new_array1[2][1] + ']' + ')');

console.log("-> " + result(array1, array2, array3, array4, new_array1));

console.log("Масив 2: ");
console.log('(' + '[' + new_array2[0][0] + "," + new_array2[0][1] + "," + new_array2[0][2] + ']' + ',');
console.log(' ' + '[' + new_array2[1][0] + "," + new_array2[1][1] + "," + new_array2[1][2] + ']' + ',');
console.log(' ' + '[' + new_array2[2][0] + "," + new_array2[2][1] + "," + new_array2[2][2] + ']' + ',');
console.log(' ' + '[' + new_array2[3][0] + "," + new_array2[3][1] + "," + new_array2[3][2] + ']' + ')');

console.log("-> " + result(array1, array2, array3, array4, new_array2));
console.log(" ");


