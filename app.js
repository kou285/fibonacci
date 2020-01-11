'use strict';
// フィボナッチ数列表示する関数
function fib(n) { // 関数fibを定義
  if (n === 0) { // nが0だったら
    return 0; // 0だったら終わり
  } else if (n === 1) { // nが1だったら
    return 1; // 1を返して終わり
  }
  return fib(n - 1) + fib(n - 2); // 上記以外の数は、nから1を引いたものと2を引いたもの、を足す
}

// 40まで表示するfor文を作る
const length = 40; // lengthに40を代入　→　これは繰り返す回数
for (let i = 0; i <= length; i++) { // 0から40まで
  console.log(fib(i)) // consoleで表示する　→　fib関数に40を入れる
}
