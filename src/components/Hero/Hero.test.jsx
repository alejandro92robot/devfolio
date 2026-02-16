import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { describe, it, expect } from 'vitest';

describe('Hero Component', () => {
    it('renders the welcome message', () => {
        render(<Hero />);
        expect(screen.getByText(/¡Bienvenido a mi portafolio!/i)).toBeInTheDocument();
    });

    it('renders the name', () => {
        render(<Hero />);
        expect(screen.getByText(/Alejandro Aguilera/i)).toBeInTheDocument();
    });
});
