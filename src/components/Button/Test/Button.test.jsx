import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Button from './../Button'

describe('Button', () => {
    describe('When we render a button', () => {
        it('should be visible', () => {
            const onClick = jest.fn()
            render(<Button buttonText="Test" onClick={onClick} />)
            expect(screen.getByRole('button', { name: 'Test' })).toBeVisible()
        })
    })

    describe('When the user is clicking on the button', () => {
        it('should handle the click', () => {
            const onClick = jest.fn()
            render(<Button buttonText="Test" onClick={onClick}  />)
            // userEvent.click(screen.getByTestId('test-button'))
            fireEvent.click(screen.getByTestId('test-button'));
            expect(onClick).toHaveBeenCalled()
        })
    })
})
