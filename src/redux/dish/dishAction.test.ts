import moxios from "moxios"
import { storeFactory } from "../../testUtils/testUtils";
import { fetchDishes } from "./dishActions";

const sampleDishes = [
    {
        "id": 0,
        "name": "Uthappizza",
        "image": "images/uthappizza.png",
        "category": "mains",
        "label": "Hot",
        "price": "4.99",
        "featured": true,
        "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
    },
    {
        "id": 1,
        "name": "Zucchipakoda",
        "image": "images/zucchipakoda.png",
        "category": "appetizer",
        "label": "",
        "price": "1.99",
        "featured": false,
        "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
    },
]

describe('fetch dishes', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('should return correct dishes', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: sampleDishes
            });
        });

        return store.dispatch<any>(fetchDishes())
            .then(() => {
                const dishes = store.getState().dishState.dishes;
                expect(dishes).toStrictEqual(sampleDishes);
            });

    });

    test('should return error message if there is error', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 401
            });
        });

        return store.dispatch<any>(fetchDishes())
            .then(() => {
                const errorMessage = store.getState().dishState.errorMessage;
                expect(errorMessage).toStrictEqual("Request failed with status code 401");
            });
    });


});
