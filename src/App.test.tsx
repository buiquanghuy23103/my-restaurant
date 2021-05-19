import { mount } from "enzyme";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { findByTestAttr, storeFactory } from "./testUtils/testUtils"

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