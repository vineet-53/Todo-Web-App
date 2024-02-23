import React from 'react'
import { ErrorInputField as ErrorInputFieldStyles } from '../../styles/FormStyles'
function ErrorInputField({children}) {
  return (
    <p className={ErrorInputFieldStyles}>
        {children}
    </p>
  )
}

export default ErrorInputField
