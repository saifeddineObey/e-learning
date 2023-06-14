import { render, screen } from '@testing-library/react';
import CourseCard from './index.tsx';
import '@testing-library/jest-dom/extend-expect';



describe('CourseCard', () => {
  const mockParts = {
    image: 'test-image.jpg',
    parts: [
      {
        title: 'Part 1',
        duration: '2 hours',
        terminationDate: '2023-06-15',
        progress: 3,
      },
      {
        title: 'Part 2',
        duration: '1.5 hours',
        terminationDate: '2023-06-18',
        progress: 1,
      },
    ],
  };

  it('renders correctly', () => {
    render(<CourseCard parts={mockParts} />);
    const courseCardElement = screen.getByTestId('course-card');
    expect(courseCardElement).toBeInTheDocument();
  });

  it('displays the correct number of parts', () => {
    render(<CourseCard parts={mockParts} />);
    const descriptionContainerElements = screen.getAllByTestId('description-container');
    expect(descriptionContainerElements).toHaveLength(mockParts.parts.length);
  });

  it('displays the correct title for each part', () => {
    render(<CourseCard parts={mockParts} />);
    const titleElements = screen.getAllByRole('heading', { level: 3 });
    mockParts.parts.forEach((part, index) => {
      expect(titleElements[index]).toHaveTextContent(part.title);
    });
  });

  it('displays the correct duration and termination date for each part', () => {
    render(<CourseCard parts={mockParts} />);
    const durationElements = screen.getAllByTestId('duration');
    const terminationDateElements = screen.getAllByTestId('termination-date');
    mockParts.parts.forEach((part, index) => {
      expect(durationElements[index]).toHaveTextContent(part.duration);
      expect(terminationDateElements[index]).toHaveTextContent(part.terminationDate);
    });
  });

});
