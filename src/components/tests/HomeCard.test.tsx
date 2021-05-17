import { shallow } from "enzyme";
import { Dish } from "../../redux/dish/dishTypes";
import HomeCard from "../HomeCard";
import { findByTestAttr } from "../../testUtils/testUtils";
import { BASE_URL } from "../../shared/baseUrl";


const sampleDish: Dish = {
    id: 1,
    name: "Fish",
    image: "alaksdlksd",
    category: "kslklk",
    label: "sfasd",
    price: "ajlskdf",
    description: "asfad",
    featured: false,
}

const setup = () => {
    return shallow(<HomeCard { ...sampleDish } />)
};

test('should render without error', () => {
    const wrapper = setup();
    console.log(wrapper.debug());

    const component = findByTestAttr(wrapper, "component-home-card");
    expect(component).toHaveLength(1);
});

test('should have correct image url', () => {
    const wrapper = setup();
    const imageUrl = findByTestAttr(wrapper, "card-image").prop('src');
    expect(imageUrl).toBe(BASE_URL + sampleDish.image);
});
