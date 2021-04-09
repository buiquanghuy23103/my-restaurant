import { shallow } from "enzyme"
import { findByTestAttr } from "../../testUtils/testUtils";
import ErrorText from "../ErrorText";

const sampleErrorMessage = "This is an error";

const setup = () => {
    return shallow(<ErrorText errorMessage={ sampleErrorMessage } />);
}
test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-error-text");
    expect(component).toHaveLength(1);
});

test('should render the given error message', () => {
    const wrapper = setup();
    const message = findByTestAttr(wrapper, "error-message").text();
    expect(message).toBe(sampleErrorMessage);
});
