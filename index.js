var arr1 = [5, "hello", 7.3, true, {"key": "value"}, 9, ["list", "of", "strings"], 4.6, false, (1, 2, 3)];
var arr2 = ["apple", 3.5, false, 2, "banana", 7.1, true, "cherry"];
var arr3 = [true, "data", 6.7, 4, "science", 9.2, {"nested": {"dict": "example"}}, 1, "AI", [1, 2, 3]];
console.log("Our arrays:")
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log('');
//length
console.log("length-in istifadesi:")
console.log(arr1.length);
console.log(arr2.length);
console.log(arr3.length);
console.log('');
//toString()
console.log("toString-in istifadesi:")
console.log(arr1.toString());
console.log(arr2.toString());
console.log(arr3.toString());
console.log('');
//at()
console.log("at-in istifadesi:")
console.log(arr1.at(2));
console.log(arr2.at(3));
console.log(arr3.at(6));
console.log('');
//join()
console.log("join-in istifadesi:")
console.log(arr1.join(", "));
console.log(arr2.join(" * "));
console.log(arr3.join("/"));
console.log('');
//pop()
console.log("pop-un istifadesi:")
console.log(arr1.pop());
console.log(arr2.pop());
console.log(arr3.pop());
console.log('');
//push()
console.log("push-un istifadesi:")
console.log(arr1.push("Salam"));
console.log(arr1);
console.log(arr2.push("true"));
console.log(arr2);
console.log(arr3.push({"name": "Tahir"}));
console.log(arr3);
console.log('');
//shift()
console.log("shift-in istifadesi:")
console.log(arr1.shift());
console.log(arr2.shift());
console.log(arr3.shift());
console.log("");
//unshift()
console.log("unshift-in istifadesi:")
console.log(arr1.unshift("Sagol"));
console.log(arr1);
console.log(arr2.unshift("false"));
console.log(arr2);
console.log(arr3.unshift({"name": "Shabnam"}));
console.log(arr3);
console.log("");
//delete()
console.log("delete-nin istifadesi:")
delete arr1[0]
console.log(arr1);
delete arr2[2]
console.log(arr2);
delete arr3[4]
console.log(arr3);
console.log("");
//concat
console.log("concat-in istifadesi:")
console.log(arr1.concat(arr2).concat(arr3));
console.log("");