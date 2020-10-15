import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import NavBar from '../NavBar'

describe('<Navbar />', () => {
    it('renders correctly', () => {
        const props = { open: false, handleDrawerOpen: () => {} }
        const { container } = render(<NavBar {...props} />)

        expect(container).toMatchSnapshot()
    })

    describe('when the hamburger button is clicked', () => {
        it('', () => {
            const handleDrawerOpenMock = jest.fn()
            const props = {
                open: false,
                handleDrawerOpen: handleDrawerOpenMock,
            }
            const { getByRole } = render(<NavBar {...props} />)
            const hamburgerMenuButton = getByRole('button', {
                name: 'open drawer',
            })

            fireEvent.click(hamburgerMenuButton)

            expect(handleDrawerOpenMock).toHaveBeenCalled()
        })
    })
})
