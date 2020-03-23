/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Review from '../Components/Review.js'
import { createSerializer } from 'enzyme-to-json'
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
const testReview = {
  username: 'Elias',
  title: 'Title',
  body: 'Body',
  score: '5'
}

describe('Review', () => {
  const wrapped = mount(<Review review={testReview} />)
  it('should render the review title', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
