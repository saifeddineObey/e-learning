import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import CourseListing from "./index.tsx";
import "@testing-library/jest-dom/extend-expect";

//Mock Redux store
const initialState = {
  courses: [
    {
      id: 1,
      image: "wphg.png",
      parts: [
        {
          title: "Course 1",
          duration: "2 weeks",
          terminationDate: "2023-06-30",
          progress: 50,
        },
      ],
    },
  ],
  status: "succeeded",
  error: null,
};

const mockStore = configureStore({
  reducer: {
    course: (state = initialState, action) => state,
  },
});

describe("CourseListing", () => {
  it("renders course listing correctly", () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <CourseListing />
        </MemoryRouter>
      </Provider>
    );

    const courseListingElement = screen.getByTestId("course-listing");
    expect(courseListingElement).toBeInTheDocument();
  });
});
