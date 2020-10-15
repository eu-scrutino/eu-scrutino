import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import App from './App'
import config from './config'

describe('Euscrutino App', () => {
  describe('<NavBar />', () => {
    it("contains our name!", () => {
      const { getByText } = render(<App />)
      const siteTitle = getByText(config.siteData.title)
      expect(siteTitle).toBeInTheDocument()
    })
    
    it("contains a menu which can be toggled open/closed", async () => {
      const { getByTestId } = render(<App />)
      const hamburguerMenuButton = getByTestId("menu-button")
      expect(hamburguerMenuButton).toBeInTheDocument()

      const drawer = getByTestId("menu-drawer")
      expect(drawer).not.toBeVisible()

      fireEvent.click(hamburguerMenuButton)
      expect(drawer).toBeVisible()

      const closeMenuButton = getByTestId("menu-close")
      fireEvent.click(closeMenuButton)

      // menu should not disappear instantly
      expect(drawer).toBeVisible()

      // ...but it should disappear eventually
      await waitFor(() => {
        expect(drawer).not.toBeVisible()
      })
    })
  })
  
});
