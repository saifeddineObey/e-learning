import { render, screen } from '@testing-library/react';
import ProgressBar from './index.tsx';
import '@testing-library/jest-dom/extend-expect';


describe('ProgressBar', () => {
  describe('functionality', () => {
    it('renders correctly', () => {
      render(<ProgressBar progress={3} />);
      const progressBarElement = screen.getByTestId('progress-bar');
      expect(progressBarElement).toBeInTheDocument();
    });

  });

  describe('UI', () => {
    it('applies "active" class to circles with progress less than or equal to current progress', () => {
      render(<ProgressBar progress={3} />);
      const activeCircleElements = screen.getAllByTestId('circle-active');
      expect(activeCircleElements).toHaveLength(5);
    });

  });
});
