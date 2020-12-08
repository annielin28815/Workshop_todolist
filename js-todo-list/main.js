// TO DO

window.addEventListener('DOMContentLoaded', function(){

  // 把待辦事項清單元素 (ul) 存放在 list 變數裡
  let list = document.querySelector('ul')


  // 透過陣列建立了初始內容
  const lists = ''
  for (let list of lists) {
    addItem(list)
  }

  // 封裝了一個 addItem 函式
  function addItem (text) {
    let newItem = document.createElement('li')
    newItem.innerHTML = `${text}`
    list.appendChild(newItem)
  }

  // 輸入新任務名稱， 按下+新增任務
  // 取得 input 輸入的文字
  // 按下 + 可以新增任務（li)
  // 抓出按鈕元素並綁定監聽器，監聽是否有人按下按鈕
  // 當 click 事件發生時，就取出 input 裡的值，並且呼叫 addItem()，把值塞進 template 裡，加入到 ul 裡去。
  const addBtn = document.querySelector('#addBtn')
  addBtn.addEventListener('click', function () {
    let inputValue = document.querySelector('#input').value
    addItem(inputValue + '<span class="close">x</span>')
    document.querySelector('#input').value = ''
  })


})


