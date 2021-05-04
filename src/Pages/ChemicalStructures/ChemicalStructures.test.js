import { render, screen, waitFor, waitForElement } from '@testing-library/react';
import ChemicalStructures from './';

it('should be false text because of initial exportable state', () => {
    const { getByText } = render(<ChemicalStructures />);
    expect(getByText(/SWITCH STATE:/i).textContent).toContain('SWITCH STATE: false');
});
