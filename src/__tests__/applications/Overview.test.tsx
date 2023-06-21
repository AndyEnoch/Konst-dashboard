import { render, screen } from "@testing-library/react";
import Overview from "../../applications/Overview";

describe('OverviewComponent', () => {
 function renderComponent() {
     return render(<Overview />)
 }

 it('should show overview card contents', () => {
     renderComponent();
     expect(screen.getByText('Recent Trips')).toBeInTheDocument();
     expect(screen.getByRole('button', {
         name: /Learn more/i
     })).toBeInTheDocument();
     expect(screen.getByText(/Accra - Cape Coast/i)).toBeInTheDocument();
 })
})