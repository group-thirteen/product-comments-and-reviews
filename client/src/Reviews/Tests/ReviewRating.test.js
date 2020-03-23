
import React from 'react'
import { shallow } from 'enzyme'
import ReviewRating from '../Components/ReviewRating'
import { ProgressPlugin } from 'webpack'
const testRating = '5'

describe('Rating', () => {
  const wrapped = shallow(<ReviewRating rating={testRating} />)
  it('should render the review rating', () => {
    expect(wrapped.find('.review-rating').text()).toEqual(testRating)
  })
})
