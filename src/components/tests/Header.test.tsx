import { shallow } from "enzyme"
import Header from "../Header";
import { findByTestAttr } from "../../testUtils/testUtils";


const setup = () => {
    return shallow(<Header />);
};

test('should render without error', () => {
    const wrapper = setup();
    console.log(wrapper.debug());

    const component = findByTestAttr(wrapper, "component-header");
    expect(component).toHaveLength(1);
});

test('should open modal when clicking Login button', () => {
    const wrapper = setup();

    const loginButton = findByTestAttr(wrapper, "login-button");
    loginButton.simulate('click');

    const loginModalOpenAttr = findByTestAttr(wrapper, "login-modal").prop('isOpen');
    expect(loginModalOpenAttr).toBe(true);
});

test('should open navbar when clicking navbar toggler', () => {
    const wrapper = setup();

    const navbarToggler = findByTestAttr(wrapper, "navbar-toggler");
    navbarToggler.simulate('click');

    const collapseOpenProp = findByTestAttr(wrapper, "collapse").prop('isOpen');
    expect(collapseOpenProp).toBe(true);
})
