import React, { Component } from "react";
import Books from "./components/Books";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    fetch(
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
    )
      .then((res) => res.json())
      .then((books) => {
        console.log(books);
        this.setState({
          books: books,
        });
      });
  };

  render() {
    return (
      <div className="bookContainer">
        <Header />
        <Books className="books" books={this.state.books} />
        <Footer />
      </div>
    );
  }
}

export default App;
