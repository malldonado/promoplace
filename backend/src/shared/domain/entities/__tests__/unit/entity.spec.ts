import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props = {
      prop1: 'value1',
      prop2: 123,
    }
    const entity = new StubEntity(props)
    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = {
      prop1: 'value1',
      prop2: 123,
    }
    const id = 'adfaf7ce-7151-41e6-8462-c7069aca52f4'
    const entity = new StubEntity(props, id)
    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('Should convert a entity to a JavaScript object', () => {
    const props = {
      prop1: 'value1',
      prop2: 123,
    }
    const id = 'adfaf7ce-7151-41e6-8462-c7069aca52f4'
    const entity = new StubEntity(props, id)
    expect(entity.toJSON()).toStrictEqual({ id, ...props })
  })
})
