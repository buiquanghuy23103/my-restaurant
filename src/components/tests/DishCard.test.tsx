import { shallow } from "enzyme";
import { Dish } from "../../redux/dish/dishTypes";
import { findByTestAttr } from "../../testUtils/testUtils";
import DishCard from "../DishCard";

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
    return shallow(<DishCard dish={ sampleDish } />)
}

test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-dish-card");
    expect(component).toHaveLength(1);
});

test('should render dish name', () => {
    const wrapper = setup();
    const dishName = findByTestAttr(wrapper, "dish-name").dive().text();
    expect(dishName).toBe(sampleDish.name);
});



