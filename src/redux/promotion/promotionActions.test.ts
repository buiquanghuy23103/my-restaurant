import moxios from "moxios"
import { storeFactory } from "../../testUtils/testUtils";
import { fetchPromotions } from "./promotionActions";

const samplePromotions = [
    {
        "id": 0,
        "name": "Weekend Grand Buffet",
        "image": "images/buffet.png",
        "label": "New",
        "price": "19.99",
        "featured": true,
        "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person "
    }
]

describe('fetch promotions', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('should return correct promotions', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: samplePromotions
            });
        });

        return store.dispatch<any>(fetchPromotions())
            .then(() => {
                const promotions = store.getState().promotionState.promotions;
                expect(promotions).toStrictEqual(samplePromotions);
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

        return store.dispatch<any>(fetchPromotions())
            .then(() => {
                const errorMessage = store.getState().promotionState.errorMessage;
                expect(errorMessage).toStrictEqual("Request failed with status code 401");
            });
    });


});
