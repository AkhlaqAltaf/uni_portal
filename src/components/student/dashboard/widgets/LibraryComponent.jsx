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
    <div className="p-3 md:p-6 bg-[#2C2F48] bg-opacity-50 text-white border border-white/25 rounded-lg">
      <div className="h-6 md:h-16 flex items-center pc-3 md:px-6 mb-3 md:mb-6">
        <h1 className="text-[2vw] font-bold">Library</h1>
      </div>

      <div className="bg-[#058547]/60 text-white flex justify-around py-1 md:py-2 border-b">
        <button
          className={`px-2 py-1 md:px-4 md:py-2 font-semibold transition-all duration-300 text-[1vw] ${
            activeTab === "availableBooks" ? "border-b-4 border-[#058547] text-[1vw]" : ""
          }`}
          onClick={() => setActiveTab("availableBooks")}
        >
          Available Books
        </button>
        <button
          className={`px-2 py-1 text-[1vw] md:px-4 md:py-2 font-semibold transition-all duration-300 ${
            activeTab === "issuedBooks" ? "border-b-4 border-[#058547] text-[1vw]" : ""
          }`}
          onClick={() => setActiveTab("issuedBooks")}
        >
          Issued Books
        </button>
        <button
          className={`px-2 py-1 text-[1vw] md:px-4 md:py-2 font-semibold transition-all duration-300 ${
            activeTab === "history" ? "border-b-4 border-[#058547] text-[1vw]" : ""
          }`}
          onClick={() => setActiveTab("history")}
        >
          Borrowing History
        </button>
      </div>

      <div className="flex justify-between items-center bg-[#1f2c38] p-4 md:p-4 mb-3 md:mb-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Search for books..."
          className="w-2/3 p-2 border border-[#058547] bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-[#058547] text-[1vw]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-2 bg-[#1f2c38] border border-[#058547] rounded focus:outline-none focus:ring-2 focus:ring-[#058547] text-[1vw]"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
        </select>
      </div>

      <div>
        {activeTab === "availableBooks" && (
          <div>
            <h2 className="font-semibold mb-2 md:mb-4 text-[#058547] text-[1vw]">Available Books</h2>
            <ul className="space-y-2 md:space-y-4">
              {filteredBooks(books.availableBooks).map((book, index) => (
                <li
                  key={index}
                  className="p-2 text-[1vw] md:p-4 bg-[#1f2c38] rounded-lg shadow-lg flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold text-[#058547] text-[1vw]">{book.title}</h3>
                    <p className="text-gray-400 text-[1vw]">Author: {book.author}</p>
                  </div>
                  <button
                    className="bg-[#058547] text-white px-2 py-1 md:px-4 md:py-2 rounded hover:bg-[#036a41] transition-all duration-300"
                    onClick={() => setSelectedBook(book)}
                  >
                    Borrow
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Add similar rendering for 'issuedBooks' and 'history' tabs */}
      </div>
    </div>
  );
};

export default LibraryComponent;
