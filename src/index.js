const $selectBtn = document.querySelector('#select-color')
const $color = document.querySelector('input')
const $colorBox = document.querySelector('.color-box')
const $colorText = document.querySelector('#color-text')
const $copyBtn = document.querySelector('#copy-btn')

const originColor = localStorage.getItem('color')
if (originColor) changeColor(originColor)

function changeColor(colorCode) {
  $colorBox.style.backgroundColor = colorCode
  $colorText.innerText = colorCode
  localStorage.setItem('color', colorCode)
}

$selectBtn.addEventListener('click', () => changeColor($color.value))
$copyBtn.addEventListener('click', () => {
  // Clipboard API: 복사
  if ($colorText.innerText) navigator.clipboard.writeText($colorText.innerText)
})