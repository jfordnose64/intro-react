import React, { Component } from 'react'
import grace from '../images/gracehoppertocat.jpg'
import jetpack from '../images/jetpacktocat.png'
import miner from '../images/minertocat.png'
import mountie from '../images/mountietocat.png'
import privatetocat from '../images/privateinvestocat.jpg'
import topgun from '../images/topguntocat.png'
import sentry from '../images/Sentrytocat_octodex.jpg'
import brenna from '../images/Brennatocat.png'

export class Funny extends Component {
  render() {
    return (
      <main className="funny">
        <div>
          <ul className="img-list">
            <li>
              <img src={grace} className="gracetocat" alt="gracetocat" />
            </li>
            <li>
              <img src={jetpack} className="jetpack" alt="jetpack-cat" />
            </li>
            <li>
              <img src={miner} alt="minertocat" />
            </li>
            <li>
              <img src={mountie} alt="mountietocat" />
            </li>
            <li>
              <img src={privatetocat} alt="privatetocat" />
            </li>
            <li>
              <img src={topgun} alt="topguncat" />
            </li>
            <li>
              <img src={sentry} alt="sentry" />
            </li>
            <li>
              <img src={brenna} alt="brenna" />
            </li>
          </ul>
        </div>
      </main>
    )
  }
}

export default Funny
