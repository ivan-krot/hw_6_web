// Додаємо слухач кліку: метод, що буде виконуватися при кліку на кнопку
// "Додати задачу"
document.getElementById('addListItem').addEventListener('click', () => {
  // Знаходимо тектове поле задачи
  let listItemContentEl = document.getElementById('newItemInput');
  // Беремо введене значення
  let listItemContentText = listItemContentEl.value;

  // Якщо значення є - додаємо новий елемент до списку
  if (listItemContentText) {
    // Створюємо елемент
    let listItem = document.createElement('li');
    // Встановлюємо його контент рівним значенню з текстового поля
    listItem.textContent = listItemContentText;

    // Додаємо створений елемент до списку
    document.getElementById('myList').appendChild(listItem);

    // Вичищаємо непотрібне значення з текстового поля
    listItemContentEl.value = '';
  }
})

// Завантажуємо з сервера файл і додаємо його зміст до списку
document.getElementById('loadItems').addEventListener('click', () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('myList').innerHTML = this.responseText;
  }
  xhttp.open('GET', '_items.html', true);
  xhttp.send();
})

document.getElementById('loadItemsWithoutRemoving').addEventListener('click', () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    let alreadyAddedTasks = document.getElementById('myList').innerHTML;
    let fullResponse = alreadyAddedTasks + this.responseText;
    document.getElementById('myList').innerHTML = fullResponse;
  }
  xhttp.open('GET', '_items.html', true);
  xhttp.send();
})

//Delete all elements from a list
document.getElementById('deleteAllItems').addEventListener('click', () => {
    let element = document.getElementById('myList');
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
})