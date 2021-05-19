import moxios from "moxios"
import { storeFactory } from "../../testUtils/testUtils";
import { fetchLeaders } from "./leaderActions";

const sampleLeaders = [
    {
        "id": 0,
        "name": "Peter Pan",
        "image": "images/alberto.png",
        "designation": "Chief Epicurious Officer",
        "abbr": "CEO",
        "featured": false,
        "description": "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
    },
    {
        "id": 1,
        "name": "Dhanasekaran Witherspoon",
        "image": "images/alberto.png",
        "designation": "Chief Food Officer",
        "abbr": "CFO",
        "featured": false,
        "description": "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
    },
];

describe('fetch leaders', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('should return correct leaders', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: sampleLeaders
            });
        });

        return store.dispatch<any>(fetchLeaders())
            .then(() => {
                const leaders = store.getState().leaderState.leaders;
                expect(leaders).toStrictEqual(sampleLeaders);
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

        return store.dispatch<any>(fetchLeaders())
            .then(() => {
                const errorMessage = store.getState().leaderState.errorMessage;
                expect(errorMessage).toStrictEqual("Request failed with status code 401");
            });
    });


});
