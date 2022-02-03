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

// function saveReview(newReview, reviews) {
//   for (var i = 0; i < reviews.length; i++) {
//     if (newReview !== reviews[i]) {
//       reviews.push(newReview);
//     } else {
//       return reviews;
//     }
//   }
// }

function saveReview(newReview, reviews) {
    if (reviews.indexOf(newReview) === -1) {
      reviews.push(newReview);
      return reviews;
    } else if (reviews.indexOf(newReview) > -1) {
      return reviews;
    }
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
