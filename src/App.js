import React from "react";
import "./App.css";

import "./Nav";

const liffId = "1654284840-Ke3kRNpv";

export default class ReactApp extends React.Component {
  constructor() {
    super();

    const { loading, error } = useLiff({ liffId });
    if (loading) return <p>...loading</p>;
    if (error) return <p>{error.message}</p>;
  }
  render() {
    return (
      <div className="hero has-bg-img is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <span className="logo">Shakya Rujen</span>
                <span
                  className="navbar-burger burger"
                  data-target="navbarMenuHeroA"
                >
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <span className="navbar-item">
                    <a
                      href="https://code.ebisutech.net/ebisu/introduce2019/tree/master/Shakya%20Rujen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button is-primary is-inverted"
                    >
                      <span className="icon">
                        <i className="fab fa-gitlab" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="tile is-ancestor" id="display-none">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                      <p className="title">About Me</p>
                      <p className="subtitle">自己紹介</p>
                      <div className="content">
                        初めまして！私はサッキャ・ルゼンと申します。今日、私についてちょっと自己紹介したいと思います。
                      </div>
                    </article>

                    <article className="tile is-child notification is-warning">
                      <p className="title">Family</p>
                      <p className="subtitle">家族</p>
                      <div className="content">
                        私は8人の家族と一緒に住んでいます。
                      </div>
                    </article>
                  </div>

                  <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                      <p className="title">Hobbies</p>
                      <p className="subtitle">趣味</p>
                      <figure className="image is-4by3">
                        <img alt="futsal-hobbie" src="futsal.jpg" />
                      </figure>
                      <p>
                        趣味は気分と周りの人によって変わっています。一番はまっている趣味はフットサルです。
                      </p>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Hopes!</p>
                    <p className="subtitle">希望</p>
                    <div className="content">
                      私はいつか Full Stack
                      Enginnerになりたいです。今は、ミスばっかりしていますが、間違いが勉強っていうことに信じています。
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                  <div className="content">
                    <p className="title">Experiences</p>
                    <p className="subtitle">経験</p>
                    <div className="content">
                      <div className="list is-hoverable list-edit">
                        <span className="list-item">たこ焼き屋さん</span>
                        <span className="list-item">肉屋さん</span>
                        <span className="list-item">コンビニ</span>
                        <span className="list-item">民泊サイト、英語担当</span>
                        <span className="list-item">串カツ屋さん</span>
                        <span className="list-item">居酒屋</span>
                        <span className="list-item">花火大会スタッフ</span>
                        <span className="list-item">MFスタッフ</span>
                        <span className="list-item">
                          ホテルフロントスタッフ
                        </span>
                      </div>
                      <p>
                        自分が目指しているの職業とはまったく関係のないですね。。(笑)
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <p>
            <img
              id="mario"
              className="mario"
              alt="mario"
              src="images/mario.png"
            />
          </p>
        </div>

        <div className="modal" id="modal">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
            </header>

            <section className="modal-card-body"></section>
          </div>
        </div>
      </div>
    );
  }
}
