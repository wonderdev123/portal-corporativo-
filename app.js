let count = 2;

function addNews() {
  count++;

  $("#newsList").append(
    `<div class="list-group-item">Nova notícia automática #${count}</div>`
  );
}