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
let arr: number[][] = [[1,2,3],[4,5,6],[7,8,9]];
//1) Вывести его на экран
console.log("task one 'Вывести его на экран'");
console.log("type one");
console.log(arr);

console.log("type two");
for (let line of arr) {
    console.log(line)
}

console.log("type thre");
for (let line of arr){
    console.log(line.join(', '));
}
//2) Вывести сумму сумм главной и обратной диагоняли
console.log("task two 'Вывести сумму сумм главной и обратной диагоняли'");
let check = true;
if (arr.length > 2){
    let width: number = arr[0].length;
    for (let line of arr){
        if (line.length != width){
            check = false;
            break;
        }
    }
}
if (!check){
    console.log("array is not matrix");
} else{
    let sumMainDiagonal: number = 0;
    let sumReciprocalDiagonal: number = 0;
    let len: number = Math.min(arr.length, arr[0].length);
    for (let i = 0; i < len; i++){
        sumMainDiagonal += arr[i][i];
        sumReciprocalDiagonal += arr[i][len-1-i];
    }
    console.log(`sum main diagondl: ${sumMainDiagonal}\nsum reciprocal diagonal ${sumReciprocalDiagonal}`);
}
//3) Вывести сред арифмет число среди не четных ячеек в нем
console.log("task two 'Вывести сред арифмет число среди не четных ячеек в нем'");
//не четные ячейки в двумерном массиве это как?
for (let line of arr){
    let sum: number = 0;
    for (let i = 1; i < line.length; i+=2){
        sum += line[i];
    }
    console.log(`line: ${line.join(', ')}. sum not even cells ${sum}`);
}