import Head from 'next/head';
import React from 'react';
import { Controls, PlayState, Tween, DrawSVGPlugin } from 'react-gsap';

export default function Home() {
  return (
    <div>
      <Tween from={{ y: '-200px' }} to={{ y: '0' }} duration={2} delay={2.5} ease="expo(1)">
        <header>
          <div className="wrapper">
            <div className="row">
              <div className="col">
                <a href="#" className="logo"><img src="/telegram-logo.svg" alt="Telegram logo"/></a>
              </div>
              <div className="col">
                <nav>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Apps</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Protocol</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </Tween>
      <section className="block hero">
        <div className="wrapper">
          <Tween from={{ x: '200px', opacity: '0' }} to={{ x: '0', opacity: '0.2' }} duration={2} ease="expo(1)">
            <img src="/tele.svg" alt="Graphic of the letters tele" className="accent-graphic tele" />
          </Tween>
          <Tween from={{ x: '-200px', opacity: '0' }} to={{ x: '0', opacity: '0.2' }} duration={2} ease="expo(1)">
            <img src="/gram.svg" alt="Graphic of the letters gram" className="accent-graphic gram" />
          </Tween>
          <div className="row">
            <div className="col">
              <div className="content">

                <Tween from={{ x: '400px' }} to={{ x: '0' }} duration={3} ease="expo(1.7)">
                  <h1 className="title">Telegram a new <br />era of messaging.</h1>
                </Tween>

                <Tween from={{ opacity: '0' }} to={{ opacity: '1' }} duration={3} delay={2} ease="expo(1)">
                  <p className="copy">Telegram is a cloud-based mobile and desktop messaging app with a focus on security and speed.</p>
                  <a href="#" className="btn">Download</a>
                </Tween>
              </div>
              <Tween from={{ opacity: '0' }} to={{ opacity: '1' }} duration={3} delay={2} ease="expo(1)">
                <div className="recent-news">
                  <div className="label">Recent News</div>
                  <div className="row">
                    <article>
                      <p className="date">Apr 3</p>
                      <p className="excerpt">Coronavirus news and verified channels</p>
                    </article>
                    <article>
                      <p className="date">Mar 30</p>
                      <p className="excerpt">Chat folders, archives, channel stats, and more</p>
                    </article>
                  </div>
                </div>
              </Tween>
            </div>
            <div className="col">
              <div className="image phone">
                <Tween from={{ x: '-400px' }} to={{ x: '0' }} duration={3} ease="expo(1.7)">
                  <img src="/telegram-app.png" alt="Image of telegram mobile app" className="iphone" />
                </Tween>
              </div>
              <Tween from={{ opacity: '0' }} to={{ opacity: '1' }} duration={2.5} delay={2} ease="expo(1)">
                <div className="caption">
                  <img src="/apple-logo.svg" alt="Apple logo" className="apple-logo" />
                  <h2>Telegram for iPhone/iPad</h2>
                </div>
              </Tween>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
