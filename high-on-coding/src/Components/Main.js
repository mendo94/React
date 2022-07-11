import React, { Component } from "react";

export default class Main extends Component {
  render() {
    const mainStory = [
      {
        title: "Curse of the Current Reviews",
        article:
          "When you want to any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.",
      },
    ];
    return (
      <div>
        {mainStory.map(function (news, index) {
          return (
            <div>
              <h1 key={index}>{news.title}</h1>
              <p>{news.article}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
