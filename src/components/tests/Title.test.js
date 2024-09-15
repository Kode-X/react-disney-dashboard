import { render } from "@testing-library/react";
import Title from "../Title";

test("renders the Title component with the correct text", () => {
  const { getByText } = render(<Title text="Disney Characters" />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const titleElement = getByText(/Disney Characters/i);
  expect(titleElement).toBeInTheDocument();
});
