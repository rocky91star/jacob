import React from 'react'
import Logo from '../components/Clogo.png'

const Header = () => {
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: "space-between",
                maxWidth: '100',
                maxHeight: '100',
                padding: '20px',
                backgroundColor: '#fefefe'
            }
        }>
            <img src={Logo} alt={Logo} maxWidth='30px' />
        </div>
    )
}
export default Header;
