import React from 'react'

const FetchResults = () => (
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
)

export default FetchResults
