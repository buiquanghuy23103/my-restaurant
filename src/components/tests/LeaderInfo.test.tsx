import { shallow } from "enzyme";
import { findByTestAttr } from "../../testUtils/testUtils";
import { BASE_URL } from "../../shared/baseUrl";
import LeaderInfo from "../LeaderInfo";
import { Leader } from "../../redux/leader/leaderTypes";


const sampleLeader: Leader = {
    "id": 0,
    "name": "Peter Pan",
    "image": "images/alberto.png",
    "designation": "Chief Epicurious Officer",
    "abbr": "CEO",
    "featured": false,
    "description": "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
}

const setup = () => {
    return shallow(<LeaderInfo leader={ sampleLeader } />)
};

test('should render without error', () => {
    const wrapper = setup();
    console.log(wrapper.debug());

    const component = findByTestAttr(wrapper, "component-leader-info");
    expect(component).toHaveLength(1);
});

test('should have correct image url', () => {
    const wrapper = setup();
    const imageUrl = findByTestAttr(wrapper, "media-image").prop('src');
    expect(imageUrl).toBe(BASE_URL + sampleLeader.image);
});

test('should display correct leader name', () => {
    const wrapper = setup();
    const leaderName = findByTestAttr(wrapper, "leader-name").dive().text();
    expect(leaderName).toEqual(sampleLeader.name);
});
