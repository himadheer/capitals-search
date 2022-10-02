import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {selectedCountry: countryAndCapitalsList[0].country}

  selectCapital = event => {
    const {selectedCountry} = this.state

    const searchCountry = countryAndCapitalsList.find(
      each => each.id === event.target.value,
    )

    this.setState({selectedCountry: searchCountry.country})
  }

  render() {
    const {selectedCountry} = this.state
    return (
      <div className="bg-container">
        <div className="capitals-card">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="capital-select"
            id="capitals"
            onChange={this.selectCapital}
          >
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals" className="label">
            is capital of which country
          </label>
          <p className="country">{selectedCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
