import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BookSave() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("apikey");
  const [favorite, setFavorite] = useState([]);
  const userId = localStorage.getItem("userId");
  const Navigate = useNavigate();

  const handleTextChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
      userId: userId,
    });
  };
  const handleFavorites = (e) => {
    setFavorite({
      ...favorite,
      title: e.target.id,
      publisher: e.target.lang,
      genre: e.target.title,
      imageURL: e.target.name,
      userId: userId,
    });
  };

  const handleSaveBook = async () => {
    const addBooks = await fetch(`http://localhost:8080/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favorite),
    });
    const response = await addBooks.json();
    if (response.success) {
      Navigate("/");
    }
  };

  const handleChange = (e) => {
    const book = e.target.value;
    setBook(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=10`
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  };

  return (
    <div
      className="list-group"
      style={{
        marginTop: "2em",
      }}
    >
      <div className="input-group-append">
        <button className="btn btn-success" onClick={handleSaveBook}>
          Add Book
        </button>
      </div>
      <h1>Explore New Titles</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" onChange={handleChange} autoComplete="off" />
        </div>
        <button type="submit">Search</button>
      </form>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {result.map((book) => (
          <div
            key={book.id}
            className="card bg-dark"
            style={{
              maxWidth: "16em",
              minWidth: "16em",
              padding: "2em",
              margin: "2em",
              backgroundColor: "none",
            }}
          >
            <div className="card-body">
              <p className="card-text">{book.volumeInfo.title}</p>
            </div>
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              style={{ borderRadius: "3%", maxHeight: "18em" }}
            />
            <div className="card-body">
              <a href={book.volumeInfo.previewLink}>Read Preview</a>
              <div>
                <input
                  id={book.volumeInfo.title}
                  lang={book.volumeInfo.authors}
                  name={book.volumeInfo.imageLinks.thumbnail}
                  title={book.volumeInfo.categories}
                  onChange={handleFavorites}
                  type="checkbox"
                />
                <label htmlFor="">Add to Favorites</label>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default BookSave;
