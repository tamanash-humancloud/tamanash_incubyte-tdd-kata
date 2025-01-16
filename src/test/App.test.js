import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/calculator';

describe('Calculator Component', () => {
    it('should display the initial state correct', () => {
        render(<Calculator />)
        const display = screen.getByRole('display')
        expect(display).toHaveTextContent('0')
    });
})