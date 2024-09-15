// tests/components/GenericModal.test.js

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GenericModal from "../GenericModal";

test("renders GenericModal and handles close event", () => {
  const handleClose = jest.fn();
  const { getByLabelText, getByText } = render(
    <GenericModal open={true} onClose={handleClose}>
      <div>Modal Content</div>
    </GenericModal>
  );

  // Check if the modal content is rendered
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText("Modal Content")).toBeInTheDocument();

  // Check if the close button is rendered and clickable
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const closeButton = getByLabelText("close");
  fireEvent.click(closeButton);

  // Check if the handleClose function is called
  expect(handleClose).toHaveBeenCalledTimes(1);
});
