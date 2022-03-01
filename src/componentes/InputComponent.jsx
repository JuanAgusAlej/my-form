import React from 'react'

function InputComponent(props) {
    const { dato, tipo, handLeChange, inputValue } = props
    

  return (
      <div>
           <label className="form-label">{dato}</label>
              <input
                type={tipo}
                className="form-control"
                id="validationCustom01"
                name={dato.toLowerCase()}
                value={inputValue}
                onChange={handLeChange}
                required
              />
    </div>
  )
}

export default InputComponent