import React from 'react';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  return (
    <>
    <div className='input__container'>
      <input type="text"  />
    </div>

    <div className="customize__password">
        <p className='heading'>Customize your password</p>

<section className='content'>

        <div>
            <input type="checkbox" checked/>
            <label htmlFor="">Uppercase</label>
        </div>
        
        <div>
            <input type="checkbox" />
            <label htmlFor="">Lowercase</label>
        </div>

        
        <div>
            <input type="checkbox" />
            <label htmlFor="">Numbers</label>
        </div>

        <div>
            <input type="checkbox" />
            <label htmlFor="">Symbols</label>
        </div>


          <div className="generate__button">
         <button >
            Password Generator
         </button>
          </div>
</section>

    </div>
    </>
  )
}

export default PasswordGenerator