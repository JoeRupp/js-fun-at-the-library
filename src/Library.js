function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library;
}

// there has to be a simpler/more dynamic way of doing the below

function addBook(libraryName, book) {
  if (book.genre === "fantasy") {
    return libraryName.shelves.fantasy.push(book)
  } else if (book.genre === "fiction") {
    return libraryName.shelves.fiction.push(book)
  } else if (book.genre === "nonFiction") {
    return libraryName.shelves.nonFiction.push(book)
  }
}

// function checkoutBook(libraryName, book, shelfGenre) {
//   if ((libraryName.shelves.fantasy[0].title) === book) {
//     libraryName.shelves.fantasy.splice(book, 1);
//     return `You have now checked out ${book} from the ${libraryName.name}`;
//   } else if ((libraryName.shelves.fiction[0].title) === book) {
//     libraryName.shelves.fiction.splice(book, 1);
//     return `You have now checked out ${book} from the ${libraryName.name}`;
//   } else if ((libraryName.shelves.nonFiction[0].title) === book) {
//     libraryName.shelves.nonFiction.splice(book, 1);
//     return `You have now checked out ${book} from the ${libraryName.name}`;
//   }
//   return `Sorry, there are currently no copies of ${book} available at the ${libraryName}`;
// }

function checkoutBook(libraryName, book, shelfGenre) {
  var genres = ["fantasy", "fiction", "nonFiction"]
  for (var i = 0; i < genres.length; i++) {
    if (genres[i] === shelfGenre) {
      // console.log(genres[i])
      for (var k = 0; k < libraryName.shelves[genres[i]].length; k++) {
        // console.log(libraryName.shelves[genres[i]].length)
        // console.log(libraryName.shelves[genres[i]][k].title)
        if (libraryName.shelves[genres[i]][k].title === book) {
          libraryName.shelves[genres[i]].splice(k, 1);
          return `You have now checked out ${book} from the Denver Public Library`;
        }
      }
      return `Sorry, there are currently no copies of ${book} available at the Denver Public Library`;
    }
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
