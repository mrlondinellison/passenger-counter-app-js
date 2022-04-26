// initialize count as 0
// listen for clicks on increment-btn
// increment count variable when button is clicked
// change the count-el in html to reflect new count

let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0
function increment() {
  count += 1
  countEl.textContent = count
}
// save count in save-el when button is clicked
// return count to 0
// reflect count in saveEl textContent
function save() {
  let savedItem = count + ' - '
  saveEl.textContent += savedItem
  count = 0
  countEl.textContent = count
}
