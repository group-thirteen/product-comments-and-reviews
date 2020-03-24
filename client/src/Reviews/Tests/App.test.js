
import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../../App.js'
import { createSerializer } from 'enzyme-to-json'
import styles from '../Components/components.css'
// console.log('STYLES',styles())

jest.mock('jquery', () => ({ ajax: jest.fn((options) => {

  options.success(
    [
      {  title: 'title1',
        username: 'username1',
        body: 'body1',
        score: 1,
        date: 10
      },
      {  title: 'title2',
          username: '2',
          body: 'body2',
          score: 5,
          date: 20
      },
      {  title: 'title3',
          username: 'username3',
          body: 'body3',
          score: 3,
          date: 30
      }
    ]
  )   
}) }))
jest.mock('../Components/components.css', () => jest.fn())
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

describe('App', () => {
  it('should render and have correct state', () => {
    const wrapped = shallow(<App />)
    expect(wrapped).toMatchSnapshot()
    expect(wrapped.state().stars).toEqual( { '1': 1, '2': 0, '3': 1, '4': 0, '5': 1 })
    expect(wrapped.state().average).toEqual(3)
    expect(wrapped.state().reviews.length).toEqual(3)
  })
  it('should filter reviews', () => {
    const wrapper = mount(<App />)
    const form  = wrapper.find('.filter-form')
    const select = form.find('select')
    select.simulate('change', {target: {value: 2}})
    
    expect(wrapper.state().filteredReviews.length).toEqual(0)
    select.simulate('change', {target: {value: 1}})
    expect(wrapper.state().filteredReviews.length).toEqual(1)
  })
  it('should sort review by star or date', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toMatchSnapshot()
    // const form  = wrapper.find('.sort-form')
    const select = wrapper.find('select')
    select.simulate('change', {target: {value: 'stars'}})
    select.simulate('submit', {})
    expect(wrapper.state().reviews[2].title).toEqual('title2')
    select.simulate('change', {target: {value: 'time'}})
    select.simulate('submit', {})
    expect(wrapper.state().reviews[2].title).toEqual('title3')
  })
  // it('should', () => {})

})
