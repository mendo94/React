import React, { Component } from "react";

export default class Sections extends Component {
  render() {
    const subStories = [
      {
        title: "Hello WatchKit",
        article:
          "Last month Apple released the anticipated WatchKit Framework for developers in the form if ios 8.2 beta SDK release. The watchkit framework enabled the developers to create Apple watch applications.",
        comments: "12 comments",
        likes: "124 likes",
      },
      {
        title: "Introduction to Swift",
        article:
          "Swift is a modern programming language developed by Apple to create the next generation of IOS OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in Swift and how you can get started.",
        comments: "15 comments",
        likes: "45 likes",
      },
    ];

    return (
      <div>
        {subStories.map(function (article, index) {
          return (
            <div>
              <h3 key={index}>{article.title}</h3>
              <p>{article.article}</p>
              <div>
                <span>{article.comments} </span>
                <span>{article.likes} </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
