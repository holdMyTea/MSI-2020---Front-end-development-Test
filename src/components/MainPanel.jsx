import React from 'react'

const MainPanel = () => (
  <main>
    <div className="container">
      <h3 className="msi-header">MSI 2020</h3>

      <header className="hey">Hey!</header>
      <header className="find-header">Lets try to find a joke htmlFor you:</header>

      <label className="search-option">
        Random
        <input type="radio" value="random" name="search-option" />
        <span className="radio"></span>
      </label>

      <label className="search-option">From categories
        <input type="radio" value="from-categories" name="search-option" />
        <span className="radio"></span>
      </label>

      <div className="categories-container">
        <span>
          <input type="checkbox" name="categories" id="animals-category" />
          <label htmlFor="animals-category">Animals</label>
        </span>

        <span>
          <input type="checkbox" name="categories" id="career-category" />
          <label htmlFor="career-category">Career</label>
        </span>

        <span>
          <input type="checkbox" name="categories" id="celebrity-category" />
          <label htmlFor="celebrity-category">Celebrity</label>
        </span>

        <span>
          <input type="checkbox" name="categories" id="dev-category" />
          <label htmlFor="dev-category">Dev</label>
        </span>
      </div>

      <label className="search-option">Search
        <input type="radio" value="search" name="search-option" />
        <span className="radio"></span>
      </label>

      <input type="text" name="search" id="search-input" placeholder="Free text search..." />

      <button className="search-button">Get a joke</button>

      <div className="fetch-results">

        <div className="fetched-joke">

          <div className="joke-favorite-container">
            <img src="./assets/empty-heart-icon.svg" alt="Favorite the joke" />
          </div>

          <div className="fetched-joke-body">

            <div className="joke-icon-column">
              <img src="./assets/message-icon.svg" alt="Small icon of a message" />
            </div>

            <div className="joke-main-column">
              <div className="joke-link-row">
                <span className="joke-id-label">
                  ID:
                  <a href="localhost">
                    <span>XNaAxUduSw6zANDaIEab7A</span>
                    <img src="./assets/link-icon.svg" alt="Link icon" />
                  </a>
                </span>
              </div>

              <p className="joke-text">
                No one truly knows whos Chuck Norris real father. No one is biologically strong enough htmlFor this. He mustve conceived himself.
              </p>

              <div className="joke-footer">
                <span className="joke-last-update">Last update: 1923 hours ago</span>
                <span className="joke-category">celebrity</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </main>
)

export default MainPanel
