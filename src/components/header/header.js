import React from 'react'

const header = () => {
  return (
    <div>
        <nav id='navbar'>
            <div className='logo'>
                interlove
            </div>
            <div className='menu'>
                <a href='#menu-item'><h3>Home</h3></a>
                <a href='#menu-item'><h3>About</h3></a>
                <a href='#menu-item'><h3>Work With Me</h3></a>
                <a href='#menu-item'><h3>Testimonials</h3></a>
                <a href='#menu-item'><h3>Contact</h3></a>
                <a href='#menu-item'>
                    <select id='language'>
                        <option value='EN'>EN</option>
                        <option value='CN'>CN</option>
                        <option value='RU'>RU</option>
                    </select>
                </a>
            </div>
        </nav>
        <div id='black-shape'>

        </div>
        <div id='hero-description'>
            <h3>Build authentic and <span>irresistible</span> self-assurance.</h3>
            <h4>Build your self-esteem, expand your social circle, attract your perfect mate to design the life you desire.</h4>
            <h4>As a dating coach, I can assist you in revealing your true self to establish genuine connections.</h4>
        </div>
    </div>
  )
}

export default header