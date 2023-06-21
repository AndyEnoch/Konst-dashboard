import {fireEvent, getByRole, render, screen, within} from "@testing-library/react";
import BusRideComponent from "../../applications/BusRideComponent";
import userEvent from "@testing-library/user-event";

describe('BusRideComponent', () => {
    function renderComponent () {
        return render(<BusRideComponent />)
    }
    it('should show bus ride component props', () => {
        renderComponent()
        expect(screen.getByText(/Legon - Madina/i)).toBeInTheDocument();
    })

    it('selects the right option',  async () => {
        renderComponent()
        const selectButton = within(screen.getByTestId('test-select')).getByRole('button');
        userEvent.click(selectButton);
        expect(await screen.findByRole('presentation')).toBeInTheDocument();
    })
})