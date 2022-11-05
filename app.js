//Book class: Represent a Book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//UI class: Handle UI Tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "3434434",
      },
      {
        title: "Book Two",
        author: "Jane Doe",
        isbn: "45545",
      },
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const BookList = document.querySelector(".book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
     
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><button class="delete-btn">X</button></td>
     
     `;

    BookList.appendChild(row);
  }
  static deleteBook(element) {
    if (element.classList.contains("delete-btn")) {
      element.parentElement.parentElement.remove();
    }
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// store Class: Handles Storage

// Event: Display Books

document.addEventListener("DOMContentLoaded", UI.displayBooks);
// Event: Add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  //prevent actual submit for viewing

  e.preventDefault();
  //get form values

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //Instantiate book

  const newBook = new Book(title, author, isbn);

  UI.addBookToList(newBook);

  //clear field

  UI.clearFields();
});
// Event Remove a Book

document.querySelector(".book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
