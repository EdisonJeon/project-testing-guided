import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AnimalForm from "./AnimalForm";

/*

NOTE:

    The Guided Project video shows the older way of using the `userEvent` library.

    The newer version 14 (included in this starter code) works like this:

    test("renders AnimalForm without errors", () => {
        const user = userEvent.setup(); // instantiate a user
        render(<AnimalForm />); // render the component
        await user.type(specieInput, "foo"); // await user DOT event
    });

    Check the solution repo for the full GP code.

*/

test("renders without error", () => {
  render(<AnimalForm />);
});

test("when user fills all fields and submits, species appears", async () => {
  // ARRANGE:
  const user = userEvent.setup();
  render(<AnimalForm />);
  const species = "feline";
  const speciesInput = screen.getByLabelText(/species:/i);
  const ageInput = screen.getByLabelText(/age:/i);
  const notesInput = screen.getByLabelText(/notes:/i);
  const submitBtn = screen.getByRole("button");

  // ACT:
  await user.type(speciesInput, species);
  await user.type(ageInput, "9");
  await user.type(notesInput, "lorem ipsum");
  await user.click(submitBtn);

  // ASSERT:
  /*
    EXAMPLES OF SOME ASSERTIONS WITH JEST =>
        expect(element).toBeTruthy();
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
        expect(element).not.toHaveTextContent('something')

    PROMISE => 
        const speciesFeedbackPromise = screen.findByText(species);
        speciesFeedbackPromise
            .then(speciesFeedback => {
                expect(speciesFeedback).toBeInTheDocument();
            })

    ASYNC / AWAIT =>
        const speciesFeedback = await screen.findByText(species);
        expect(speciesFeedback).toBeInTheDocument();

    WAITFOR =>
        await waitFor(() => {
            const speciesFeedback = screen.queryByText(species);
            expect(speciesFeedback).toBeInTheDocument();
        });
        
    SYNC =>
        const speciesFeedback = screen.queryByText(species);
        expect(speciesFeedback).toBeInTheDocument();
*/
});
