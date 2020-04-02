//import Counter from '../../src/components/Counter';
import { Counter } from '../../src/components/Counter'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

const setUp = () => ({
    props: {
        increment: jest.fn(),
        decrement: jest.fn()
    }
})

describe('Counter', () => {
    it('renders properly with props', () => {
        const { props } = setUp();
        const wrapper = shallow(<Counter {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it('renders the submitbutton', () => {
        const { props } = setUp();
        const wrapper = shallow(<Counter {...props} />)
        expect(wrapper.find('button').length).toBe(2)
    })
})
