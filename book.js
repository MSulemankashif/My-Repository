const bookContainer = document.querySelector('.book-container');
const bookCover = document.querySelector('.book-cover');
const bookPages = document.querySelector('.book-pages');
const pageTurners = document.querySelectorAll('.page-turner');
const pages = document.querySelectorAll('.page');

let currentPage = 1;

pageTurners.forEach((pageTurner, index) => {
  pageTurner.addEventListener('click', () => {
    if (index === currentPage - 1) {
      // Turn to next page
      turnPage(currentPage + 1);
    } else if (index === currentPage) {
      // Turn to previous page
      turnPage(currentPage - 1);
    }
  });
});

function turnPage(pageNumber) {
  if (pageNumber < 1) {
    pageNumber = 1;
  } else if (pageNumber > pages.length) {
    pageNumber = pages.length;
  }

  currentPage = pageNumber;

  // Update book cover and pages
  bookCover.style.transform = `rotateY(${(pageNumber - 1) * 10}deg)`;
  bookPages.style.transform = `rotateY(${(pageNumber - 1) * 10}deg)`;

  // Update page visibility
  pages.forEach((page, index) => {
    if (index === pageNumber - 1) {
      page.style.transform = `rotateY(0deg)`;
      page.style.visibility = 'visible';
    } else {
      page.style.transform = `rotateY(90deg)`;
      page.style.visibility = 'hidden';
    }
  });
}

// Initialize book
turnPage(1);
pages.forEach((page, index) => {
    page.addEventListener('click', (e) => {
      if (e.offsetX < 20) {
        // Turn to previous page
        turnPage(currentPage - 1);
      } else if (e.offsetX > page.offsetWidth - 20) {
        // Turn to next page
        turnPage(currentPage + 1);
      }
    });
  });