import { render, screen } from "../../testUtils";
import DishCard from "../DishCard";

const sampleDish = {
    "id": 0,
    "name": "Uthappizza",
    "image": "images/uthappizza.png",
    "category": "mains",
    "label": "Hot",
    "price": "4.99",
    "featured": true,
    "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
};

function setup() {
    render(<DishCard dish={ sampleDish } />);
}

test('should render dish name correctly', () => {
    setup();
    const cardTitle = screen.getByText(sampleDish.name);
    expect(cardTitle).toBeInTheDocument();
});
