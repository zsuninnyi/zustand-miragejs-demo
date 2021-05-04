import { render, screen, waitFor, waitForElement, fireEvent } from '@testing-library/react';
import Chemistry from './';
it('should be disabled the text because of the  initial exportable state', async () => {
    const { getByTestId } = render(<Chemistry />);
    expect(getByTestId('paragraph')).toHaveStyle('color: grey');
});

it('should switch the state', () => {
    const { getByRole } = render(<Chemistry />);
    const button = getByRole('switch');

    fireEvent.change(button, { target: { checked: true } });
    expect(getByRole('switch')).toHaveProperty('checked', true);
});
