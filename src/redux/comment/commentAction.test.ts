import moxios from "moxios"
import { storeFactory } from "../../testUtils/testUtils";
import { addComment, fetchComments, postComment } from "./commentActions";

const sampleComments = [
    {
        "id": 0,
        "dishId": 0,
        "rating": 5,
        "comment": "Imagine all the eatables, living in conFusion!",
        "author": "John Lemon",
        "date": "2012-10-16T17:57:28.556094Z"
    },
    {
        "id": 1,
        "dishId": 0,
        "rating": 4,
        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
        "author": "Paul McVites",
        "date": "2014-09-05T17:57:28.556094Z"
    },
];


describe('fetch comments', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('should return correct comments', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: sampleComments
            });
        });

        return store.dispatch<any>(fetchComments())
            .then(() => {
                const comments = store.getState().commentState.comments;
                expect(comments).toStrictEqual(sampleComments);
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

        return store.dispatch<any>(fetchComments())
            .then(() => {
                const errorMessage = store.getState().commentState.errorMessage;
                expect(errorMessage).toStrictEqual("Request failed with status code 401");
            });
    });


});

describe('post comments', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('should add new comment to redux store', () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: sampleComments[0]
            });
        });

        return store.dispatch<any>(postComment({ ...sampleComments[0] }))
            .then(() => {
                const comments = store.getState().commentState.comments;
                expect(comments[0].comment).toBe(sampleComments[0].comment);
            });
    });

});
