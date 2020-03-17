
import React from 'react'
import { shallow } from 'enzyme'
import ReviewUsername from '../Components/ReviewUsername'
import { ProgressPlugin } from 'webpack'
const testUsername = 'Testing text for review body'

describe('Username', () => {
  const wrapped = shallow(<ReviewUsername username={testUsername} />)
  it('should render the review username', () => {
    expect(wrapped.find('.review-username').text()).toEqual(testUsername)
  })
})
