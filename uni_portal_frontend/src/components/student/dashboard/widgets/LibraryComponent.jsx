import React, { useState } from "react";

const LibraryComponent = () => {
  const [activeTab, setActiveTab] = useState("availableBooks");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [sortBy, setSortBy] = useState("title");

  const books = {
    issuedBooks: [
      {
        title: "React for Beginners",
        author: "John Doe",
        issueDate: "2024-01-01",
        dueDate: "2024-02-01",
      },
      {
        title: "Learning Python",
        author: "Jane Smith",
        issueDate: "2024-01-10",
        dueDate: "2024-02-10",
      },
    ],
    availableBooks: [
      { title: "Advanced JavaScript", author: "Mark Taylor" },
      { title: "Data Science Essentials", author: "Alice Brown" },
    ],
    borrowingHistory: [
      {
        title: "CSS Mastery",
        author: "Emily Davis",
        returnedDate: "2023-12-01",
      },
      {
        title: "Algorithms Unlocked",
        author: "Michael Scott",
        returnedDate: "2023-11-15",
      },
    ],
  };

  const handleSort = (list) =>
    [...list].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  const filteredBooks = (list) =>
    handleSort(list).filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-16 flex items-center px-6">
        <h1 className="text-white text-lg font-bold">Library</h1>
      </div>

      {/* Tabs */}
      <div className="bg-gray-100 flex justify-around py-2 border-b">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "availableBooks"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("availableBooks")}
        >
          Available Books
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "issuedBooks"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("issuedBooks")}
        >
          Issued Books
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "history"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("history")}
        >
          Borrowing History
        </button>
      </div>

      {/* Search and Sort */}
      <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search for books..."
          className="w-2/3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
        </select>
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        {activeTab === "availableBooks" && (
          <div>
            <h2 className="text-gray-800 font-semibold mb-4">
              Available Books
            </h2>
            <ul className="space-y-2">
              {filteredBooks(books.availableBooks).map((book, index) => (
                <li
                  key={index}
                  className="border p-3 rounded bg-gray-50 shadow-sm flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold">{book.title}</h3>
                    <p className="text-sm text-gray-600">
                      Author: {book.author}
                    </p>
                  </div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => setSelectedBook(book)}
                  >
                    Borrow
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "issuedBooks" && (
          <div>
            <h2 className="text-gray-800 font-semibold mb-4">Issued Books</h2>
            <ul className="space-y-2">
              {filteredBooks(books.issuedBooks).map((book, index) => (
                <li
                  key={index}
                  className="border p-3 rounded bg-gray-50 shadow-sm"
                >
                  <h3 className="font-bold">{book.title}</h3>
                  <p className="text-sm text-gray-600">Author: {book.author}</p>
                  <p className="text-sm text-gray-600">
                    Issued: {book.issueDate}
                  </p>
                  <p className="text-sm text-gray-600">Due: {book.dueDate}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <h2 className="text-gray-800 font-semibold mb-4">
              Borrowing History
            </h2>
            <ul className="space-y-2">
              {filteredBooks(books.borrowingHistory).map((book, index) => (
                <li
                  key={index}
                  className="border p-3 rounded bg-gray-50 shadow-sm"
                >
                  <h3 className="font-bold">{book.title}</h3>
                  <p className="text-sm text-gray-600">Author: {book.author}</p>
                  <p className="text-sm text-gray-600">
                    Returned: {book.returnedDate}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Book Details Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">{selectedBook.title}</h3>
            <p className="text-sm text-gray-600">
              Author: {selectedBook.author}
            </p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setSelectedBook(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryComponent;