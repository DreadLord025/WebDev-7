import { itException } from './it.exception'

describe('itException', () => {
  it('should be defined', () => {
    expect(new itException()).toBeDefined()
  })
})
