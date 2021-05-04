import { render, screen, waitFor, waitForElement } from '@testing-library/react';
import Paragraph from './';

it('should be black because of the state', () => {
    const { getByText } = render(<Paragraph>Text</Paragraph>);
    expect(getByText(/Text/i)).toHaveStyle('color: black');
});
it('should be grey because of the disabled state', () => {
    const { getByText } = render(<Paragraph disabled>Text</Paragraph>);
    expect(getByText(/Text/i)).toHaveStyle('color: grey');
});
