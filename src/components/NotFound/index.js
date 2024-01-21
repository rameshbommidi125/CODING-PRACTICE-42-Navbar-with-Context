import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notfoundBgClassName = isDarkTheme
        ? 'notfound-bg-dark'
        : 'notfound-bg-light'

      const notfoundTextHeadingClassName = isDarkTheme
        ? 'notfound-text-heading-light'
        : 'notfound-text-heading-dark'

      const notfoundTextContentClassName = isDarkTheme
        ? 'notfound-text-para-light'
        : 'notfound-text-para-dark'

      return (
        <div className={`notfound-app-container ${notfoundBgClassName}`}>
          <Navbar />
          <div className="notfound-page-container">
            <div className="notfound-container">
              <img
                className="notfound-img"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1
                className={`notfound-heading ${notfoundTextHeadingClassName}`}
              >
                Lost Your Way?
              </h1>

              <p className={`notfound-content ${notfoundTextContentClassName}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
