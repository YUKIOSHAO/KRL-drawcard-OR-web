// 模拟角色数据库
const characters = [];
const riderNames = ['Kuuga', 'Agito', 'Ryuki', '555 (Faiz)', 'Blade', 'Kabuto', 'Den-O', 'Hibiki', 'Kiva', 'Decade', 'Double (W)', 'OOO (Ooo)', 'Fourze', 'Wizard', 'Gaim', 'Drive', 'Ghost', 'Ex-Aid', 'Build', 'Zi-O'];
for (let i = 0; i < 20; i++) {
  const rarity = Math.random() < 0.2? '稀有' : '普通';
  const attribute = riderNames[i];
  const name = '仮面ライダー';
  const image = `jmqs/${i + 1}.jpg`;
  characters.push({ name, attribute, rarity, image });
}

// 单抽函数
function singleDraw() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  const character = characters[randomIndex];
  const card = document.createElement('div');
  card.classList.add('draw-card');
  const img = document.createElement('img');
  img.src = character.image;
  const nameAndAttribute = document.createElement('div');
  const nameElement = document.createElement('h3');
  nameElement.textContent = character.name;
  const attributeElement = document.createElement('p');
  attributeElement.textContent = character.attribute;
  nameAndAttribute.appendChild(nameElement);
  nameAndAttribute.appendChild(attributeElement);
  card.appendChild(img);
  card.appendChild(nameAndAttribute);
  const drawResults = document.getElementById('draw-results');
  // 每行最多五个
  if (drawResults.children.length % 5 === 0) {
    drawResults.appendChild(document.createElement('br'));
  }
  drawResults.appendChild(card);
  card.style.opacity = 1;
  card.style.transform = 'scale(1.2)';
  setTimeout(() => {
    card.style.transform = 'scale(1)';
  }, 300);
  // 单抽也刷新一次
  drawResults.innerHTML = '';
  drawResults.appendChild(card);

  // 播放音效
  const drawSound = document.getElementById('draw-sound');
  drawSound.src = 'jmqs.mp3';
  drawSound.play();
  if (character.image === 'jmqs/10.jpg') {
    const menSound = document.getElementById('men-sound');
    menSound.src = 'men.mp3';
    menSound.play();
  } else if (character.image === 'jmqs/20.jpg') {
    const zioSound = document.getElementById('zio-sound');
    zioSound.src = 'zio.mp3';
    zioSound.play();
  }
}

// 十连抽函数
function tenDraw() {
  const drawResults = document.getElementById('draw-results');
  drawResults.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    const card = document.createElement('div');
    card.classList.add('draw-card');
    const img = document.createElement('img');
    img.src = character.image;
    const nameAndAttribute = document.createElement('div');
    const nameElement = document.createElement('h3');
    nameElement.textContent = character.name;
    const attributeElement = document.createElement('p');
    attributeElement.textContent = character.attribute;
    nameAndAttribute.appendChild(nameElement);
    nameAndAttribute.appendChild(attributeElement);
    card.appendChild(img);
    card.appendChild(nameAndAttribute);
    // 每行最多五个
    if ((drawResults.children.length + i) % 5 === 0) {
      drawResults.appendChild(document.createElement('br'));
    }
    drawResults.appendChild(card);
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = 'scale(1.2)';
      setTimeout(() => {
        card.style.transform = 'scale(1)';
      }, 300);
    }, i * 200);
  }

  // 播放音效
  const tenDrawSound = document.getElementById('ten-draw-sound');
  tenDrawSound.src = 'jiazai.mp3';
  tenDrawSound.play();
}

// 刷新函数
function refreshPage() {
  const refreshSound = document.getElementById('refresh-sound');
  refreshSound.src = 'final.mp3';
  refreshSound.play();
  location.reload();
}

// 绑定按钮点击事件
document.getElementById('single-draw').addEventListener('click', singleDraw);
document.getElementById('ten-draw').addEventListener('click', tenDraw);
document.getElementById('refresh-button').addEventListener('click', refreshPage);

function singleDraw() {
  // 抽卡逻辑...

  console.log('About to play draw sound.');
  const drawSound = document.getElementById('draw-sound');
  drawSound.src = 'jmqs.mp3';
  drawSound.play();

  if (character.image === 'jmqs/10.jpg') {
    console.log('About to play men sound.');
    const menSound = document.getElementById('men-sound');
    menSound.src = 'men.mp3';
    menSound.play();
  } else if (character.image === 'jmqs/20.jpg') {
    console.log('About to play zio sound.');
    const zioSound = document.getElementById('zio-sound');
    zioSound.src = 'zio.mp3';
    zioSound.play();
  }
}


