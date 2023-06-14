import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from './index.tsx';

describe('Sidebar Functional Test', () => {
  it('toggles sidebar when button is clicked', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    const button = screen.getByRole('button');
    const sidebarWeb = screen.getByTestId('sidebar-web');
    const sidebarMobile = screen.getByTestId('sidebar-mobile');

    expect(sidebarWeb).toBeInTheDocument();

    button.click();

    expect(sidebarMobile).toBeVisible();

  });
});

describe('Sidebar Frontend Test', () => {
  it('renders navigation and contact components', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    const navigationElement = screen.getAllByTestId('navigation');
    const contactElement = screen.getAllByTestId('contact');

    expect(navigationElement).toBeTruthy();
    expect(contactElement).toBeTruthy();
  });
});
