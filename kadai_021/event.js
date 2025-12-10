// ①ボタン要素を取得
const btn = document.getElementById('btn');

// ②テキスト要素を取得
const text = document.getElementById('text');

// ③ボタンにクリックイベントを追加
btn.addEventListener('click', () => {
    // ④2秒後にテキストを変更
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});