import './index.css'

const Navbar = props => {
  const {score, sec} = props
  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="match-logo"
        className="match-logo"
      />
      <div className="score-sec-container">
        <p>
          Score: <span>{score}</span>
        </p>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="clock"
            className="clock"
          />
        </div>
        <p className="sec">{sec} sec</p>
      </div>
    </nav>
  )
}

export default Navbar
