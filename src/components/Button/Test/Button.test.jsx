import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './../Button'

describe('Button', () => {
    describe('When we render a button', () => {
        it('It should be visible', () => {
            const onClick = jest.fn()
            render(<Button buttonText="Test" onClick={onClick} />)
            expect(screen.getByRole('button', {name:'Test'})).toBeVisible()
            // expect(screen.getByText('Test')).toBeVisible();
        })
    })

    describe('When the user is clicking on the button', () => {
        it('It should handle the click', () => {
            const onClick = jest.fn()
            render(<Button buttonText="Test" onClick={onClick} />)
            //userevent ON VEUT CLIQUER SUR LE BOUTON
            expect(onClick).toHaveBeenCalled()
        })
    })
})