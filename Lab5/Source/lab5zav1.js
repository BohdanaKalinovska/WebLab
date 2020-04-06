var person = {
	surname:"Kalinovska", //KLN
	name:"Bohdana", //BDN
	data:"6/1/2001", //01A46
	gender:"female"
};


//Повертає слово без голосних букв
function removeVowels(word){              
    return word.replace(/[aeiouy]/gi, "");
}

//Повертає слово без приголосних букв
function removeConsonant(word){              
    return word.replace(/[bcdfghjklmnpqrstvwxz]/gi, "");
}


//Дана функція рахує загальну кількість букв в фамілії і в залежності від вийнятку виводить 3 букви верхнього регістру
function lenght_surname(word){
	var new_surname = "";
	//Якщо фамілія складається більше ніж з 3 приголосні удаляємо всі голосні записуємо тільки перші 3 приголосні (переводимо все в верхній регістр)
	if(removeVowels(word).length > 4){
		for(var i=0; i<3; i++){
			new_surname +=removeVowels(word.toUpperCase())[i];
		}
		return new_surname;
	}

	//Якщо фамілія складається менш ніж з 3 приголосних: додаємо X поки букв не стане 3 (переводимо все в верхній регістр)
	if(word.length <3){
		new_surname=removeVowels(word.toUpperCase())+removeConsonant(word.toUpperCase());
		for(var i=0; i<3; i++){
			if(new_surname.length != 3){
				new_surname += "X";
			}else{
				break;
			}
		}
		return new_surname;
	}

	//Якщо фамілія складається з 3 букв(як правило там має бути голосна): записуємо спочатку приголосні, а потім голосні (переводимо все в верхній регістр)
	if(word.length ==3){
		new_surname=removeVowels(word.toUpperCase())+removeConsonant(word.toUpperCase());
		return new_surname;
	}
}


//Дана функція рахує загальну кількість букв в імені і в залежності від вийнятку виводить 3 букви верхнього регістру
function lenght_name(word){
	var new_name = "";
	//Якщо ім'я складається більше ніж з 3 приголосні виводимо 1,3,4 (переводимо все в верхній регістр)
	if(removeVowels(word).length > 3){
		for(var i=0; i<4; i++){
			if(i==1){
				continue;
			}
			new_name +=removeVowels(word.toUpperCase())[i];
		}
		return new_name;
	}

	//Якщо ім'я складається менш ніж з 3 приголосних: додаємо в кінець голосні (переводимо все в верхній регістр)
	if(removeVowels(word).length <3){
		for(var i=0; i<3; i++){
			new_name +=(removeVowels(word.toUpperCase())+removeConsonant(word.toUpperCase()))[i] ;
		}
		return new_name;
	}

	//Якщо ім'я складається з рівно з 3 приголосних то виводимо їх в тому ж порядку
	if(removeVowels(word).length ==3){
		new_name=removeVowels(word.toUpperCase());
		return new_name;
	}

	//Якщо ім'я складається менше ніж з 3 букв то виводимо їх спочатку приголосні потім голосні і поки не стане 3 букви додаємо X (переводимо все в верхній регістр)
	if(word.length <3){
		new_name=removeVowels(word.toUpperCase)+removeConsonant(word.toUpperCase());
		for(var i=0; i<3; i++){
			if(new_name.length != 3){
				new_name += "X";
			}else{
				break;
			}
		}
		return new_name;
	}
}

function data_division(data, gender){
	var day ="";
	var month ="";
	var year ="";
	day=data.split('/')[0]; //зчитування до знака /
	month=data.split('/')[1];
	year=data.split('/')[2];

	var new_year = year[2]+year[3]; //з 2001 робимо 01 - за умовою
	var new_day = "";

	//Робота з днем
	if(gender === "female"){
		new_day=parseInt(day)+40; //parseInt - перетворює строку в число
	}
	if(gender === "male" && day < 10){
		new_day="0"+day;
	}
	if(gender === "male" && day >= 10){
		new_day=day;
	}

	var list_months = { 
		1: "A", 
		2: "B", 
		3: "C", 
		4: "D", 
		5: "E", 
		6: "H", 
		7: "L", 
		8: "M", 
		9: "P", 
		10: "R", 
		11: "S", 
		12: "T" 
	};

	var new_month=list_months[month];
	var full_data = new_year + new_month + new_day;
	return full_data; 

}
console.log("-------Завдання №1-------");
console.log("Person:");
console.log("       "+"surname:" + person.surname);
console.log("       "+"name:" + person.name);
console.log("       "+"data:" + person.data);
console.log("       "+"gender:" + person.gender);
console.log("Ідентифікаційний код:");
console.log(lenght_surname(person.surname) + lenght_name(person.name) + data_division(person.data, person.gender));
console.log(" ");

