const ArticleGen = (element) => {
  const expandButton = element.querySelector('.expandButton');
  expandButton.textContent = 'expand';
  expandButton.addEventListener('click', () => {
    element.classList.toggle('article-open');
  })
}

let articles = document.querySelectorAll('.article');
articles.forEach((article) => {
  ArticleGen(article);
});