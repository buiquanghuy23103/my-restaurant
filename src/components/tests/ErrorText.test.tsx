import { render, screen } from "../../testUtils";
import ErrorText from "../ErrorText";

function setup(message: string) {
    render(<ErrorText errorMessage={ message } />);
}

test('should render correct error message', () => {
    const expectMessage = "This is an error";
    setup(expectMessage);
    const actual = screen.getByRole('heading');
    expect(actual).toHaveTextContent(expectMessage);
});
