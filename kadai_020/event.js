// ボタン要素を取得
const btn = document.getElementById('btn');

// テキスト要素を取得
const text = document.getElementById('text');

// ボタンにクリックイベントを設定
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});