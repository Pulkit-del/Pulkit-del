import * as actions from '../src/store/Counter';
import reducer from '../src/store/Counter';
import incrementCountType from '../src/store/Counter';
import decrementCountType from '../src/store/Counter';
import initialState from '../src/store/Counter';

describe('action', () => {
    it('should create an action to increment', () => {
        const expectedAction = {
            type: actions.incrementCountType,
        }
        expect(actions.increment()).toEqual(expectedAction)
    })
}),

describe('reducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle ADD_TODO', () => {
        const action = { type: incrementCountType }
        const expectedState = { count: initialState.count + 1 }

        expect(reducer(initialState, action)).toEqual(expectedState);
    });
})