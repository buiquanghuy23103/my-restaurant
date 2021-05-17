import { shallow } from "enzyme";
import { findByTestAttr } from "../../testUtils/testUtils";
import UserComment from "../UserComment";
import { Comment } from "../../redux/comment/commentTypes";
import convertToFormattedDateString from "../../utils/DateUtil";

const sampleComment: Comment = {
    "id": 0,
    "dishId": 0,
    "rating": 5,
    "comment": "Imagine all the eatables, living in conFusion!",
    "author": "John Lemon",
    "date": "2012-10-16T17:57:28.556094Z"
};

const setup = () => {
    return shallow(<UserComment comment={ sampleComment } />)
};

test('should render without error', () => {
    const wrapper = setup();
    console.log(wrapper.debug());

    const component = findByTestAttr(wrapper, "component-comment");
    expect(component).toHaveLength(1);
});

test('should render comment text', () => {
    const wrapper = setup();
    const commentText = findByTestAttr(wrapper, "comment-text").text();
    expect(commentText).toBe(sampleComment.comment);
});

test('should render correct author name', () => {
    const wrapper = setup();
    const authorName = findByTestAttr(wrapper, "author-name").text();
    expect(authorName).toEqual(sampleComment.author);
});

test('should render correct date and time', () => {
    const wrapper = setup();
    const authorName = findByTestAttr(wrapper, "date-time").text();
    expect(authorName).toContain(convertToFormattedDateString(sampleComment.date));
})
