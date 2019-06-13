import React, { Component } from "react";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Anderson Rodrigues</span>
              <span className="place">Fortaleza</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/wow.jpg" alt="" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>666 curtidas</strong>

            <p>
              Oi Cthulhu seu lindo, tudo de boa? XD
              <span>#react #omnistack #Cthulhu #studies</span>
            </p>
          </footer>
        </article>

        <article>
          <header>
            <div className="user-info">
              <span>Anderson Rodrigues</span>
              <span className="place">Fortaleza</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/wow.jpg" alt="" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>666 curtidas</strong>

            <p>
              Oi Cthulhu seu lindo, tudo de boa? XD
              <span>#react #omnistack #Cthulhu #studies</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
