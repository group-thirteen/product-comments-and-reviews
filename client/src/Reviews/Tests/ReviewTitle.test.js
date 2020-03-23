/* eslint-disable no-unused-vars */

import React from 'react'
import { shallow } from 'enzyme'
import ReviewTitle from '../Components/ReviewTitle'
import { ProgressPlugin } from 'webpack'
const testTitle = 'Test Title'

describe('Title', () => {
  const wrapped = shallow(<ReviewTitle title={testTitle} />)
  it('should render the review title', () => {
    expect(wrapped.find('.review-title').text()).toEqual(testTitle)
  })
})
