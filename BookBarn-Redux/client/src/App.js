import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function App() {
  const [searchBooks, setSearchBooks] = useState([]);
  const searchInput = "";
  useEffect(() => {
    searchAllBooks();
  }, []);

  // const handleSearch = (e) => {
  //   setSearchBooks({
  //     searchInput: e.target.value,
  //   });
  // };

  const searchAllBooks = () => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyDWZchMfcTgZ6tz4opBD6_myPdDvStJegg`
    )
      .then((response) => response.json())
      .then((searchBooks) => {
        setSearchBooks(searchBooks);
      });
  };

  // console.log(searchBooks.items[0].volumeInfo);

  // const searchResults = searchBooks.items.volumeInfo;
  // console.log(searchBooks);

  // const result = []
  // for (let i = 0; i < 10; i++) {
  //   searchResults.push(<Print value={i} key={i} />)
  // }

  // const bookResults = searchResults.map((search) => {
  //   return (
  //     <div>
  //       <li>{search.title}</li>
  //     </div>
  //   );
  // });

  return (
    <div>
      <input type="text" name="searchInput" />

      {/* <ul className="text-white">{searchResults.title}</ul>
      <ul className="text-white">{searchResults.authors}</ul>
      <ul className="text-white">{searchResults.publishedDate}</ul>
      <ul className="text-white">{searchResults.description}</ul>
      <img src={searchResults.imageLinks.thumbnail} alt="" /> */}
    </div>
  );
}

export default App;
