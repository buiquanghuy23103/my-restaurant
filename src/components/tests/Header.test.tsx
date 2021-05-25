import { fireEvent } from "@testing-library/react";
import { render, screen } from "../../testUtils";
import Header from "../Header";

function setup() {
    render(<Header />);
}

test('should open modal on login button click', () => {
    setup();
    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);
    const modal = screen.getByRole('heading', { name: 'Login form' });
    expect(modal).toBeInTheDocument();
});