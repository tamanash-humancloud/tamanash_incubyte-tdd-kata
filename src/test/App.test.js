import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/calculator';

describe('Calculator Component', () => {
    it('should display the initial state correct', () => {
        render(<Calculator />)
        const display = screen.getByRole('display')
        expect(display).toHaveTextContent('0')
    });

    it('should handle number inputs correctly', async () => {
        render(<Calculator />);
        userEvent.click(screen.getByRole('button', { name: '7' }));
        userEvent.click(screen.getByRole('button', { name: '8' }));

        await waitFor(() => {
            const display = screen.getByRole('display'); 
            expect(display).toHaveTextContent('78'); 
        })
    });

    it('should handle operator inputs correctly', async () => {
        render(<Calculator />);
        userEvent.click(screen.getByRole('button', { name: '7' }));
        userEvent.click(screen.getByRole('button', { name: '+' }));

        await waitFor(() => {
            const display = screen.getByRole('display'); 
            expect(display).toHaveTextContent('0'); 
        })
    });
    
})