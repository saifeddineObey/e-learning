import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Breadcrumb from './index.tsx';
import '@testing-library/jest-dom/extend-expect';


describe('Breadcrumb', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Breadcrumb />
      </MemoryRouter>
    );
    const breadcrumbElement = screen.getByTestId('breadcrumb');
    expect(breadcrumbElement).toBeInTheDocument();
  });

  it('displays the admin section', () => {
    render(
      <MemoryRouter>
        <Breadcrumb />
      </MemoryRouter>
    );
    const adminSectionElement = screen.getByText('admin');
    expect(adminSectionElement).toBeInTheDocument();
  });
});
