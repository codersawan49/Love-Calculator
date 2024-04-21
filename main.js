alert('Enter first name only without space!')
let yourName = document.getElementById('you');
let crush = document.getElementById('crush');
let btn = document.getElementById('btn');
let percent = document.querySelector('#percent span');
let input = document.querySelectorAll('input');
let tip = document.querySelector('#tip span');
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '13740251b8mshdf2db5ca40f762bp17063djsncac17cb4ce29',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
  }
};

let loveApi = async () => {
  const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${crush.value}&fname=${yourName.value}`;
  const response = await fetch(url, options);
  const result = await response.json();
  percent.innerText = result.percentage + "%";
  tip.innerText = result.result;
  yourName.value = "";
  crush.value = "";
}

btn.addEventListener('click', () => {
  if (yourName.value !== "" && crush.value !== "") {
    loveApi();

  }
})
