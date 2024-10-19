document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮
    const bgMusicButton = document.getElementById('bgMusicButton');
    const playButton = document.getElementById('playButton');
    const hiddenText = document.getElementById('hiddenText');
    const bottles = document.querySelectorAll('.bottle');
    const letters = document.querySelectorAll('.letter');

    // 音频数组
    const audioFiles = [];
    for (let i = 0; i <= 58; i++) {
        audioFiles.push(`music/segment_${i}.wav`);
    }

    let currentAudioIndex = 0;
    let isPlayingBgMusic = false;
    let isPlayingSegments = false;
    let clickCount = 0;

    // 创建音频元素
    const bgMusicElement = new Audio('hesheng.mp3');
    bgMusicElement.volume = 0.5; // 设置背景音乐音量为50%

    const audioElement = new Audio();
    audioElement.volume = 0.5; // 设置音乐片段音量为50%

    // 设置音频源
    function setAudioSource(url) {
        audioElement.src = url;
    }

    // 播放下一个音频
    function playNextAudio() {
        setAudioSource(audioFiles[currentAudioIndex]);
        audioElement.play();
        audioElement.onended = () => {
            isPlayingSegments = false;
        };
    }

    // 自动播放背景音乐
    setTimeout(() => {
        bgMusicElement.play();
        isPlayingBgMusic = true;
    }, 2000);

    // 控制背景音乐播放/暂停
    bgMusicButton.addEventListener('click', function() {
        if (!isPlayingBgMusic) {
            bgMusicElement.play();
            isPlayingBgMusic = true;
        } else {
            bgMusicElement.pause();
            isPlayingBgMusic = false;
        }
    });

    // 控制音乐片段播放
    playButton.addEventListener('click', function() {
        if (!isPlayingSegments) {
            playNextAudio();
            isPlayingSegments = true;
            currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
            clickCount++;

            // 每点击10次显示隐藏的文字
            if (clickCount % 10 === 0) {
                showHiddenText();
            }

            // 动画效果
            shakeLetters();
        }
    });

    // 显示隐藏的文字
    function showHiddenText() {
        hiddenText.style.display = 'block';
        hiddenText.style.fontSize = '24px';
        hiddenText.style.color = 'white';
        setTimeout(() => {
            hiddenText.style.color = 'red';
            hiddenText.style.fontSize = '48px';
        }, 0);
        setTimeout(() => {
            hiddenText.style.color = 'blue';
        }, 1000);
        setTimeout(() => {
            hiddenText.style.display = 'none';
        }, 2000);
    }

    // 动画效果
    function shakeLetters() {
        const shakeAmplitude = 20; // 抖动幅度
        const shakeDuration = 200; // 单次抖动时间

        // 使用函数来创建抖动效果
        function shake(letter, index) {
            letter.style.top = `-${shakeAmplitude}px`;
            setTimeout(() => {
                letter.style.top = `${shakeAmplitude}px`;
                setTimeout(() => {
                    letter.style.top = '50%';
                    if (index === letters.length - 1) {
                        // 最后一个字母抖动结束后，全部抖动
                        setTimeout(() => {
                            shakeAllBottles();
                        }, shakeDuration / 2);
                    } else {
                        shake(letters[index + 1], index + 1);
                    }
                }, shakeDuration / 2);
            }, shakeDuration / 2);
        }

        shake(letters[0], 0);
    }

    // 所有瓶子抖动
    function shakeAllBottles() {
        letters.forEach(letter => {
            letter.style.top = `-${shakeAmplitude}px`;
            setTimeout(() => {
                letter.style.top = `${shakeAmplitude}px`;
                setTimeout(() => {
                    letter.style.top = '50%';
                }, shakeDuration / 2);
            }, shakeDuration / 2);
        });
    }
});