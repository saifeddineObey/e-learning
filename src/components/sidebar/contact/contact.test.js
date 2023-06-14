import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './index.tsx';

describe('Contact', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <Contact />
      </Router>
    );
    const contactElement = screen.getByTestId('contact');
    expect(contactElement).toBeTruthy();
  });

  it('displays technical support information', () => {
    render(
      <Router>
        <Contact />
      </Router>
    );
    const technicalSupportElement = screen.getByText('Technical support');
    expect(technicalSupportElement).toBeInTheDocument();
    const technicalSupportNameElement = screen.getByText('John Doe');
    expect(technicalSupportNameElement).toBeInTheDocument();
    const technicalSupportEmailElement = screen.getByRole('link', { name: 'it@exemple.com' });
    expect(technicalSupportEmailElement).toBeInTheDocument();
  });
  

});
