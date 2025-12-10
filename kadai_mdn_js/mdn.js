// 今日の日付を取得
const today = new Date(); // 月は0始まりなので、10月は9

// コンソールに出力

console.log(`${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`);
