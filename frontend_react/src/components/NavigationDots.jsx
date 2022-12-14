import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['inicio', 'acerca', 'trabajos', 'habilidades', 'testimonios','contacto'].map((item, index) => (
            <a 
            href={`#${item}`} 
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: '#bb86fc'} : { }}
            />
        ))}
    </div>
  )
}

export default NavigationDots