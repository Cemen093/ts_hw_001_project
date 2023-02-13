// for run
// 1| npm i -g typescript
// 2| tsc index.ts
// 3| node index.js
/* let nul: null = null;
let u: undefined = undefined;
let v: void = undefined;
let num: number = 1;//0b111001, 0o436, 0xadf0d
let s: string = "";//'string', `string ${num}`
let arr: number[] = [1, 2, 3, 4];
let arr2: number[][] = [[1,2,3],[4,5,6],[7,8,9]];
let arr3: Array<number> = [1, 12, 93, 5];
let arr4: [number, string] = [1, ""];
enum Animals {cat, lion, dog, cow, monkey}//{cat = 1, lion, dog = 11, cow, monkey}
let a: any = "apple";//1, false, undefined, null
let n: never; */
//Реализовать 2х мерный массив
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//1) Вывести его на экран
console.log("task one 'Вывести его на экран'");
console.log("type one");
console.log(arr);
console.log("type two");
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var line = arr_1[_i];
    console.log(line);
}
console.log("type thre");
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var line = arr_2[_a];
    console.log(line.join(', '));
}
//2) Вывести сумму сумм главной и обратной диагоняли
console.log("task two 'Вывести сумму сумм главной и обратной диагоняли'");
var check = true;
if (arr.length > 2) {
    var width = arr[0].length;
    for (var _b = 0, arr_3 = arr; _b < arr_3.length; _b++) {
        var line = arr_3[_b];
        if (line.length != width) {
            check = false;
            break;
        }
    }
}
if (!check) {
    console.log("array is not matrix");
}
else {
    var sumMainDiagonal = 0;
    var sumReciprocalDiagonal = 0;
    var len = Math.min(arr.length, arr[0].length);
    for (var i = 0; i < len; i++) {
        sumMainDiagonal += arr[i][i];
        sumReciprocalDiagonal += arr[i][len - 1 - i];
    }
    console.log("sum main diagondl: ".concat(sumMainDiagonal, "\nsum reciprocal diagonal ").concat(sumReciprocalDiagonal));
}
//3) Вывести сред арифмет число среди не четных ячеек в нем
console.log("task two 'Вывести сред арифмет число среди не четных ячеек в нем'");
//не четные ячейки в двумерном массиве это как?
for (var _c = 0, arr_4 = arr; _c < arr_4.length; _c++) {
    var line = arr_4[_c];
    var sum = 0;
    for (var i = 1; i < line.length; i += 2) {
        sum += line[i];
    }
    console.log("line: ".concat(line.join(', '), ". sum not even cells ").concat(sum));
}
