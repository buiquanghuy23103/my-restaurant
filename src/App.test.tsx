import { mount } from "enzyme";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { findByTestAttr, storeFactory } from "./testUtils/testUtils";
import * as reactRedux from 'react-redux';

jest.mock('./redux/comment/commentActions');
const fetchComments: jest.Mock = require('./redux/comment/commentActions').fetchComments;


const setup = () => {
    const store = storeFactory();
    return mount(
        <Provider store={ store }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )
};

test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app");
    expect(component).toHaveLength(1);
});

describe('fetch data on app mount', () => {

    beforeEach(() => {
        fetchComments.mockClear();
    });

    test('should fetch comments on app mount', () => {
        const wrapper = setup();
        expect(fetchComments).toBeCalledTimes(1);
    })

})
