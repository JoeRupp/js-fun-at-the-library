function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    return sciFiShelf.unshift(book);
  } else {
    return sciFiShelf;
  }
}

function unshelfBook(book, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (book === sciFiShelf[i].title) {
      sciFiShelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var titles = `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`
  return titles;
}

function searchShelf(sciFiShelf, bookTitle) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === bookTitle) {
      return true;
    }
  }
  return false;
}
//     if (reviews.indexOf(newReview) === -1) {
//       reviews.push(newReview);
//       return reviews;
//     } else if (reviews.indexOf(newReview) > -1) {
//       return reviews;
//     }
// }

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
