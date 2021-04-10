import { shallow } from "enzyme"
import { Comment } from "../../redux/comment/commentTypes"
import { findByTestAttr } from "../../testUtils/testUtils"
import UserCommentList from "../UserCommentList"

const sampleCommentList: Comment[] = [
    {
        id: 1,
        rating: 3,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci veritatis, numquam ea officia aperiam quis qui veniam! Laudantium, nam.',
        author: 'David Beckham',
        date: '02-01-2021',
        dishId: 56
    },
    {
        id: 2,
        rating: 5,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci veritatis, numquam ea officia aperiam quis qui veniam! Laudantium, nam.',
        author: 'Adele Belle',
        date: '04-11-2021',
        dishId: 34
    },
]

const setup = () => {
    return shallow(<UserCommentList comments={ sampleCommentList } />)
}

test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-user-comment-list');
    expect(component).toHaveLength(1);
});

test('should render the correct amount of comments', () => {
    const wrapper = setup();
    const comments = findByTestAttr(wrapper, 'user-comment');
    expect(comments).toHaveLength(sampleCommentList.length);
})

