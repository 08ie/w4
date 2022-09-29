const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は華氏94度でした。だから :insertx: 散歩しに行った。 :inserty:に行ったとき、彼らは怖がり始めた。そして、:insertz:。ボブは全てを見たが、全然驚かなかった。というのも、:insertx:の体重は３００ポンドで、暑い日だった。';
const insertX = ['ゴブリン・ウィリー', 'ビッグダディ', 'クリスマス父さん'];
const insertY = ['炊き出し', 'Disneyland', 'ホワイトハウス'];
const insertZ = ['自然発火', '歩道の水たまりに溶けた', 'ナメクジになって這い去った'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('華氏94度', temperature);
    newStory = newStory.replace('３００ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
