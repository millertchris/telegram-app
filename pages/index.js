import Head from 'next/head';
import React from 'react';
import { Controls, PlayState, Tween, DrawSVGPlugin } from 'react-gsap';

export default function Home() {
  function message() {
    document.querySelector(".modal").classList.add("active");
  }

  function closeModal() {
    document.querySelector(".modal").classList.remove("active");
  }

  function triggerMenu() {
    document.querySelector(".hamburger").classList.toggle('active');
    document.querySelector("nav").classList.toggle('active');
  }
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <title>Telegram | Simple and Secure</title>
        <meta name="title" content="Telegram | Simple and Secure" />
        <meta name="description" content="Pure instant messaging — simple, fast, secure, and synced across all your devices. One of the world's top 10 most downloaded apps with over 500 million active users." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://telegram.prolificdigital.com" />
        <meta property="og:title" content="Telegram | Simple and Secure" />
        <meta property="og:description" content="Pure instant messaging — simple, fast, secure, and synced across all your devices. One of the world's top 10 most downloaded apps with over 500 million active users." />
        <meta property="og:image" content="https://telegram.prolificdigital.com/telegram-og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://telegram.prolificdigital.com" />
        <meta property="twitter:title" content="Telegram | Simple and Secure" />
        <meta property="twitter:description" content="Pure instant messaging — simple, fast, secure, and synced across all your devices. One of the world's top 10 most downloaded apps with over 500 million active users." />
        <meta property="twitter:image" content="https://telegram.prolificdigital.com/telegram-og.png" />
      </Head>

      <Tween from={{ y: '-200px' }} to={{ y: '0' }} duration={2} delay={2.5} ease="expo(1)">
        <header>
          <div className="wrapper">
            <div className="row">
              <div className="col">
                <a href="#" className="logo"><img src="/telegram-logo.svg" alt="Telegram logo"/></a>
              </div>
              <div className="col">
                <button className="hamburger" onClick={triggerMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200">
                        <g strokeWidth="6.5" strokeLinecap="round">
                          <path
                            d="M72 82.286h28.75"
                            fill="#009100"
                            fillRule="evenodd"
                            stroke="#fff"
                          />
                          <path
                            d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                            fill="none"
                            stroke="#fff"
                          />
                          <path
                            d="M72 125.143h28.75"
                            fill="#009100"
                            fillRule="evenodd"
                            stroke="#fff"
                          />
                          <path
                            d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                            fill="none"
                            stroke="#fff"
                          />
                          <path
                            d="M100.75 82.286h28.75"
                            fill="#009100"
                            fillRule="evenodd"
                            stroke="#fff"
                          />
                          <path
                            d="M100.75 125.143h28.75"
                            fill="#009100"
                            fillRule="evenodd"
                            stroke="#fff"
                          />
                        </g>
                      </svg>
                </button>
                <nav>
                  <ul>
                    <li><a href="#" onClick={message}>Home</a></li>
                    <li><a href="#" onClick={message}>Apps</a></li>
                    <li><a href="#" onClick={message}>FAQ</a></li>
                    <li><a href="#" onClick={message}>API</a></li>
                    <li><a href="#" onClick={message}>Protocol</a></li>
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
                  {/* <h1 className="title">Simple and secure alternative for communicating.</h1> */}
                  <h1 className="title">Tell a friend. Telegram.</h1>
                </Tween>
                <Tween from={{ opacity: '0' }} to={{ opacity: '1' }} duration={3} delay={2} ease="expo(1)">
                  <p className="copy">Telegram is a cloud-based mobile and desktop messaging app with a focus on security, speed, and simplicity.</p>
                  <a href="https://apps.apple.com/app/telegram-messenger/id686449807" className="btn">Download App</a>
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
                  <div className="apple-logo">
                      <svg
                        width="842.32007"
                        viewBox="0 0 842.32007 1000.0001"
                        version="1.1"
                        height="1000.0001"
                        id="svg2">
                        <defs
                          id="defs8" />
                        <path
                          d="m 824.66636,779.30363 c -15.12299,34.93724 -33.02368,67.09674 -53.7638,96.66374 -28.27076,40.3074 -51.4182,68.2078 -69.25717,83.7012 -27.65347,25.4313 -57.2822,38.4556 -89.00964,39.1963 -22.77708,0 -50.24539,-6.4813 -82.21973,-19.629 -32.07926,-13.0861 -61.55985,-19.5673 -88.51583,-19.5673 -28.27075,0 -58.59083,6.4812 -91.02193,19.5673 -32.48053,13.1477 -58.64639,19.9994 -78.65196,20.6784 -30.42501,1.29623 -60.75123,-12.0985 -91.02193,-40.2457 -19.32039,-16.8514 -43.48632,-45.7394 -72.43607,-86.6641 C 77.707522,829.30207 52.171259,778.62464 32.165691,720.84861 10.740416,658.44309 0,598.01283 0,539.50845 0,472.49197 14.481044,414.69125 43.486336,366.25444 66.28194,327.34823 96.60818,296.6578 134.5638,274.1276 c 37.95566,-22.53016 78.96676,-34.01129 123.1321,-34.74585 24.16591,0 55.85633,7.47508 95.23784,22.166 39.27042,14.74029 64.48571,22.21538 75.54091,22.21538 8.26518,0 36.27668,-8.7405 83.7629,-26.16587 44.90607,-16.16001 82.80614,-22.85118 113.85458,-20.21546 84.13326,6.78992 147.34122,39.95559 189.37699,99.70686 -75.24463,45.59122 -112.46573,109.4473 -111.72502,191.36456 0.67899,63.8067 23.82643,116.90384 69.31888,159.06309 20.61664,19.56727 43.64066,34.69027 69.2571,45.4307 -5.55531,16.11062 -11.41933,31.54225 -17.65372,46.35662 z M 631.70926,20.0057 c 0,50.01141 -18.27108,96.70693 -54.6897,139.92782 -43.94932,51.38118 -97.10817,81.07162 -154.75459,76.38659 -0.73454,-5.99983 -1.16045,-12.31444 -1.16045,-18.95003 0,-48.01091 20.9006,-99.39207 58.01678,-141.40314 C 497.65157,54.696 521.21876,37.0095 549.79815,22.90064 578.3158,9.00229 605.2903,1.31621 630.65988,0 c 0.74076,6.68575 1.04938,13.37191 1.04938,20.00505 z"
                          id="path4"/>
                      </svg>
                  </div>
                  <h2 className="title">Telegram for iPhone/iPad</h2>
                </div>
              </Tween>
            </div>
          </div>
        </div>
      </section>
      <div className="modal">
        <div className="wrapper">
          <div className="row">
            <div className="col">
              <button className="close" onClick={closeModal}>Close x</button>
              <div className="content">
                <h2>Passionate projects by passionate people.</h2>
                <p>This landing page was created by the Prolific Digital, a creative agency focused on expressing brands through human-centered design.</p>
                <p>We like to create fun landing pages from time to time where team members pick a topic or brand and we explore what that experience feels like.</p>
                <a href="https://prolificdigital.com" className="btn">Come visit us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
