import { INIT_COMMENTS } from "../commentActionTypes";

module.exports = {
    ...jest.requireActual('../commentActions.ts'),
    __esModule: true,
    fetchComments: jest.fn().mockReturnValue({
        type: INIT_COMMENTS,
        payload: []
    })
}