import React, { Component, Fragment } from 'react'

// Components
import CustomInput from 'components/CustomInput'
import CustomButton from 'components/CustomButton'
import CalendarList from 'components/CalendarList'

class Home extends Component {
  state = { startDate: '', totalDays: '', countryCode: '' }

  render () {
    return (
      <Fragment>
        <h1 style={{ textAlign: 'center' }}>Set up your custom calendar</h1>
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}>
          <CustomInput
            type="date"
            placeholder="Start date"
            value={this.state.startDate}
            onChange={this.handleChange('startDate')}
          />
          <CustomInput
            type="number"
            placeholder="Number of days"
            value={this.state.totalDays}
            onChange={this.handleChange('totalDays')}
          />
          <CustomInput
            type="test"
            placeholder="Country Code"
            value={this.state.countryCode}
            onChange={this.handleChange('countryCode')}
          />
          <CustomButton> Create </CustomButton>
        </section>
        <CalendarList />
      </Fragment>
    )
  }

  handleChange = field => e => this.setState({ [field]: e.target.value });
}

export default Home

