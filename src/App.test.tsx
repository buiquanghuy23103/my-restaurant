import { render } from "./testUtils";
import App from './App';

jest.mock('./redux/comment/commentActions');
const fetchComments: jest.Mock = require('./redux/comment/commentActions').fetchComments;


function setup() {
    render(<App />);
}



describe('fetch data on app mount', () => {

    beforeEach(() => {
        fetchComments.mockClear();
    });

    test('should fetch comments on app mount', () => {
        setup();
        expect(fetchComments).toBeCalledTimes(1);
    })

})
