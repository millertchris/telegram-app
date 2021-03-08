import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
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
      <section className="block hero">
        <div className="wrapper">
          <div className="row">
            <div className="col">
              <div className="content">
                <h1 className="title">Telegram a new era of messaging.</h1>
                <p className="copy">Telegram is a cloud-based mobile and desktop messaging app with a focus on security and speed.</p>
                <a href="#" className="btn">Download</a>
              </div>

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
            </div>
            <div className="col">
              <div className="image phone">
                {/* <img src="/phone.jpeg" alt="Image of telegram mobile app"/> */}
              </div>
              <div className="caption">
                <img src="/apple-logo.svg" alt="Apple logo" className="apple-logo" />
                <h2>Telegram for iPhone/iPad</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
