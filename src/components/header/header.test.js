import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index.tsx';
import '@testing-library/jest-dom/extend-expect';


describe('Header', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const headerElement = getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    const logoElement = getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
  });
});
