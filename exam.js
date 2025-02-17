"use strict";

// Task: Online Book Library Management System
// Create a class-based system to manage an online book library with async operations

class Book {
  constructor(id, title, author, available = true) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.available = available;
  }
}

/*
  Task 1: Complete the Library class implementation
  - Add methods for adding books, borrowing books, and returning books
  - Use proper error handling with try-catch
  - Implement async operations with Promises or async/await
  - Use array methods where appropriate
  */

class Library {
  // Initialize the books array
  #books = []; // Private field

  // TODO: Implement addBook method
  // Should validate that book has all required properties
  // Return a Promise that resolves with the added book
  addBook(bookData) {
    return new Promise((resolve, reject) => {
      if (!bookData.title || !bookData.author) {
        reject(new Error("Invalid book data. Missing required properties."));
      } else {
        const book = new Book(bookData.title, bookData.author);
        this.#books.push(book);
        console.log(`Book added: ${book.title}`);
        resolve(book);
      }
    });
  }

  // TODO: Implement borrowBook method
  // Should be async and return a Promise
  // Throw error if book is not available
  // Update book's available status
  async borrowBook(bookId) {
    return new Promise((resolve, reject) => {
      const book = this.#books.find((b) => b.title === bookId);
      if (!book) {
        reject(new Error(`Book "${bookId}" not found.`));
      } else if (!book.available) {
        reject(new Error(`Book "${book.title}" is already borrowed.`));
      } else {
        book.available = false;
        console.log(`Book borrowed: ${book.title}`);
        resolve(book);
      }
    });
  }

  // TODO: Implement returnBook method
  // Should be async and return a Promise
  // Throw error if book wasn't borrowed
  async returnBook(bookId) {
    return new Promise((resolve, reject) => {
      const book = this.#books.find((b) => b.title === bookId);
      if (!book) {
        reject(new Error(`Book "${bookId}" not found in the library.`));
      } else if (book.available) {
        reject(new Error(`Book "${book.title}" was not borrowed.`));
      } else {
        book.available = true;
        console.log(`Book returned: ${book.title}`);
        resolve(book);
      }
    });
  }

  // TODO: Implement searchBooks method
  // Should accept search term and return filtered array of books
  // Use array methods (filter, map, etc.)
  searchBooks(searchTerm) {
    const results = this.#books.filter((book) => book.title || book.author);

    if (results.length === 0) {
      console.log(`No books found for search term: "${searchTerm}"`);
    } else {
      console.log(`Books found for search term "${searchTerm}":`, results);
    }

    return results;
  }
}

/*
  Task 2: Implement the following functions to work with the Library class
  - Use arrow functions
  - Handle errors appropriately
  - Use async/await for async operations
  */

// TODO: Implement function to add multiple books
const initializeLibrary = async (library, booksData) => {
  const addedBooks = [];
  for (const bookData of booksData) {
    try {
      const book = await library.addBook(bookData);
      addedBooks.push(book);
    } catch (error) {
      console.error(`Error adding book "${bookData.title}":`, error.message);
    }
  }
  return addedBooks;
};

// TODO: Implement function to borrow multiple books
const borrowMultipleBooks = async (library, bookIds) => {
  const borrowedBooks = [];
  for (const bookId of bookIds) {
    try {
      const book = await library.borrowBook(bookId);
      borrowedBooks.push(book);
    } catch (error) {
      console.error(`Error borrowing book "${bookId}":`, error.message);
    }
  }
  return borrowedBooks;
};

/*
  Task 3: Write test code that demonstrates the usage of your implementation
  - Create a library instance
  - Add books
  - Perform searches
  - Borrow and return books
  - Handle errors
  - Use different types of loops (for, do...while)
  - Use switch statement for different operations
  */

// Example test code structure:
const runLibraryTest = async () => {
  try {
    const library = new Library();

    // Adding books
    const booksToAdd = [
      { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
      { id: 2, title: "1984", author: "George Orwell" },
      { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
      { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    ];

    console.log("Adding books...");
    await initializeLibrary(library, booksToAdd);

    // Searching books
    console.log("Searching for '1984'...");
    library.searchBooks("1984");

    // Borrowing books
    console.log("Borrowing books...");
    await borrowMultipleBooks(library, ["1984", "The Great Gatsby"]);

    // Attempt to borrow an already borrowed book
    console.log("Trying to borrow '1984' again...");
    try {
      await library.borrowBook("1984");
    } catch (error) {
      console.error(error.message);
    }

    // Returning books using a do...while loop
    console.log("Returning books...");
    const booksToReturn = ["1984", "The Great Gatsby"];
    let i = 0;
    do {
      try {
        await library.returnBook(booksToReturn[i]);
      } catch (error) {
        console.error(error.message);
      }
      i++;
    } while (i < booksToReturn.length);
    console.log("Library test completed successfully.");
  } catch (error) {
    console.error("Test failed:", error.message);
  }
};

// TODO: Run the test
runLibraryTest();
