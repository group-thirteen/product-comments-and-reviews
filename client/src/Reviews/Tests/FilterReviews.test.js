
import React from 'react'
import { shallow } from 'enzyme'
import FilterReviews from '../Components/FilterReviews'
import { createSerializer } from 'enzyme-to-json'
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))


describe('Filter Reviews', () => {
  const handleRatingSelectionSpy = jest.fn()
  const wrapped = shallow(<FilterReviews handleRatingSelection={handleRatingSelectionSpy}/>)
  const select = wrapped.find('select')
  select.simulate('change', {target: {value: 1}})
  it('should call handleRatingSelection', () => {
    expect(handleRatingSelectionSpy).toHaveBeenCalledWith(1)
  })
  it('should render correctly', () => {
    expect(wrapped).toMatchSnapshot()
  })
})
