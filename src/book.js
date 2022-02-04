function createTitle(bookIdea) {
  return `The ${bookIdea}`;
}

function buildMainCharacter(name, age, pronouns) {
  return character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(newReview, reviews) {
  for (var i = 0; i < reviews.length + 1; i++) {
    if (newReview !== reviews[i]) {
      reviews.push(newReview);
      return reviews;
    } else {
      return reviews;
    }
  }
}

// Alternate method using indexOf.
// indexOf - provides index position of element

// function saveReview(newReview, reviews) {
//     if (reviews.indexOf(newReview) === -1) {
//       reviews.push(newReview);
//       return reviews;
//     } else if (reviews.indexOf(newReview) > -1) {
//       return reviews;
//     }
// }

function calculatePageCount(bookTitle) {
  return (bookTitle.length * 20)
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
}

function editBook(book) {
  return book.pageCount = book.pageCount * .75
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
