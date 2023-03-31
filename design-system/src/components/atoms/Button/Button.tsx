import React from 'react'
import './Button.style.scss'

interface Props {
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ children }) => (
  <button>
    {children}
  </button>
)
