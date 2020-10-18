// テンプレート文字列はバッククオートで書く！！
// const name = "mike";
// const age = 28;

// const message1 = `私の名前は${name}で年齢は${age}です`;
// console.log(message1);

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// アロー関数
// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // const func2 = (str) => {
// //   return str;
// // };
// // console.log(func2("func2です"));

// // returnと{}を省略可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

// // 引数を2つ
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// 分割代入 オブジェクト編
// 毎回myProfileと書くのはめんどくさい
// const myProfile = {
//   name:"john",
//   age:28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳
// です`;
// console.log(message1);

// // 取り出すものを定義する
// const { name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳
// です`;
// console.log(message2);

// // 分割代入　配列編
// const myProfile = ["john", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}で、年齢は${age}です`;
// console.log(message4);

// // デフォルト値
// nameが設定されていなければ,ゲストとするように設定。
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("John");

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// スプレッド構文 ...
// 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// // スプレッド構文使わない
// // const sumFunc = (num1,num2) => console.log(num1 + num2);
// // sumFunc(arr1[0],arr1[1]);

// // スプレッド構文使う場合
// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// まとめる：展開の反対
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

// 配列のコピー
// const arr4 = [10, 20];
// // const arr5 = [30, 40];

// // const arr6 = [...arr4];
// // arr6[0] = 100;
// // console.log(arr4);
// // console.log(arr6);

// // // 配列の結合
// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// // map
// // 従来型：for文
// const nameArr = ["tanaka", "yamada", "honda"];
// // for (let index = 0; index < nameArr.length; index++){
// //   console.log(nameArr[index]);
// // }

// // map練習
// // const nameArr2 = nameArr.map((name)=>{
// //   return name;
// // })
// // console.log(nameArr2);

// // mapなら簡潔！！
// // indexは第2引数
// // nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// // // filter：何か条件に合うやつを抜き出す
// // // 試しに奇数だけ取り出そう
// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // });
// // console.log(newNumArr);

// // 条件に応じて配列の中身を変える
// const newNameArr = nameArr.map((name) => {
//   if (name === "honda") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 三項演算子　ある条件？　条件がtrue : 条件がfalse
// const val1 = 1>0 ? 'true' : 'false';
// console.log(val1)

// 例：数字のときは桁数を区切る！
// typeofは変数のタイプを判別。toLocaleString()は数字を区切ってくれる関数
// const num = 1300;
// const formattedNum = typeof num === 'number' ? num.toLocaleString(): '数値を入力してください';
// console.log(formattedNum);

// // 例2
// const checkSum = (num1,num2)=>{
//   return num1 + num2 > 100 ? '100を越えています' : '許容範囲内です';
// }
// console.log(checkSum(50,40));

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 論理演算子の本当の意味をしろう && ||
// Reactでも論理演算子を使うから、理解しておこう！
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か2はtrue");
// }

// if(flag1 && flag2){
//   console.log("1か2はtrue");
// }

// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
