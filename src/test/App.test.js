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

    it('should handle addition correctly', async () => {
        render(<Calculator />);
        userEvent.click(screen.getByRole('button', { name: '5' }));
        userEvent.click(screen.getByRole('button', { name: '+' }));
        userEvent.click(screen.getByRole('button', { name: '3' }));
        userEvent.click(screen.getByRole('button', { name: '=' }));

        await waitFor(() => {
            const display = screen.getByRole('display'); 
            expect(display).toHaveTextContent('8'); 
        })
    });
    
    it('should handle subtraction correctly', async () => {
        render(<Calculator />);
        userEvent.click(screen.getByRole('button', { name: '8' }));
        userEvent.click(screen.getByRole('button', { name: '-' }));
        userEvent.click(screen.getByRole('button', { name: '3' }));
        userEvent.click(screen.getByRole('button', { name: '=' }));

        await waitFor(() => {
            const display = screen.getByRole('display'); 
            expect(display).toHaveTextContent('5'); 
        })
    });

    it('should handle multiplication correctly', async () => {
        render(<Calculator />);
        userEvent.click(screen.getByRole('button', { name: '4' }));
        userEvent.click(screen.getByRole('button', { name: '*' }));
        userEvent.click(screen.getByRole('button', { name: '2' }));
        userEvent.click(screen.getByRole('button', { name: '=' }));

        await waitFor(() => {
            const display = screen.getByRole('display'); 
            expect(display).toHaveTextContent('8'); 
        })
    });

    it('should handle division correctly', async () => {
        render(<Calculator />);
        userEvent.click(screen.getByRole('button', { name: '9' }));
        userEvent.click(screen.getByRole('button', { name: '/' }));
        userEvent.click(screen.getByRole('button', { name: '3' }));
        userEvent.click(screen.getByRole('button', { name: '=' }));
        
        await waitFor(() => {
            const display = screen.getByRole('display'); 
            expect(display).toHaveTextContent('3'); 
        })
    });
})