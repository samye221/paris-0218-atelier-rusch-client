import React, { Component } from 'react'
import { store } from '../store'
import ArticleThumbnail from './ArticleThumbnail.js'
import './css/Homepage.css'
import './css/App.css'
import Logo from './img/logo-rusch-noir.png'

class Homepage extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  render () {
    const articleThumbnails = this.state.articles.filter(article => article.section === 'Lab').map(article =>
      <ArticleThumbnail key={article.id} article={article} />
    )
    return (
      <div>
        <div className="IntroBlocks">

          <div className="IntroBlockLeft">
            <div className="LogoBlock">
              <img className="LogoImg" src={Logo} />
            </div>

          <div className="CarrouselBlock">

            </div>
          </div>

          <div className="IntroBlockRight">
            <p>
              <span className="green HeimatBold">L’Atelier Rusch</span> propose des méthodes créatives pour organiser la pensée collective et co-concevoir de nouveaux services pour les collectivités et les entreprises.
              <br/>
              <span className="green HeimatBold">→  La suite !</span>
            </p>
          </div>

        </div>

        <div className="ArticlesBlock">
          {articleThumbnails}
        </div>

      </div>
    )
  }
}

export default Homepage
