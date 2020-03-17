
import React from 'react'
import { shallow } from 'enzyme'
import ReviewBody from '../Components/ReviewBody'
import { ProgressPlugin } from 'webpack'
const testBody = 'Testing text for review body'

describe('Body', () => {
  const wrapped = shallow(<ReviewBody body={testBody} />)
  it('should render the review body text', () => {
    expect(wrapped.find('.review-body').text()).toEqual(testBody)
  })
})
