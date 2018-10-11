//Task_1
var user = {};
var codes = {
	"7": "Russia",
	"38": "Ukraine",
	"1": "Usa"
}

user.name = 'Vasiliy';
user.surname = 'Prohorov';
user.age = 25;
user.phones = codes;
user.name = 'Sergey';
delete user.surname;
console.log(user);



//Task_2
for (key in user) {
console.log("Field: " + key + " valuE: " + user[key]);
}

//Task_3

var student = {};
for(key in  user){
	student[key] = user[key];
}

student = Object.assign({}, user);

student = JSON.parse(JSON.stringify(user));
student.name = 'Tom';
console.log(user);
console.log(student);
//Task_4

Object.defineProperty(user, 'isHiddenTalent', {
	value: 'smart',
	writable: false
});

//Task_5

user.bbf = 'bbf';
Object.defineProperty(user, 'country', {
	value: 'Praha'
});

delete user.bbf;
delete user.country;

//Task_6

user.toString(function() {
	return this.name;
});

user.valueOf(function() {
	return this.number;
});

console.log('His name is ' + user.name);
console.log(user*2);
