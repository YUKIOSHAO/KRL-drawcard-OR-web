document.addEventListener('DOMContentLoaded', function() {
    const cyberButton = document.getElementById('cyber-button');
    const additionalButtons = document.getElementById('additional-buttons');

    // 单击事件处理器
    cyberButton.addEventListener('click', function(event) {
        // 主按钮消失
        cyberButton.style.display = 'none';

        // 显示额外的按钮
        additionalButtons.style.display = 'flex';
        additionalButtons.style.justifyContent = 'center';
    });

    // 额外按钮的点击事件处理器
    const button1 = document.getElementById('button-1');
    button1.addEventListener('click', function() {
        window.location.href = 'page1.html'; // 替换为你想跳转的页面URL
    });

    const button2 = document.getElementById('button-2');
    button2.addEventListener('click', function() {
        window.location.href = 'page2.html'; // 替换为你想跳转的页面URL
    });
});