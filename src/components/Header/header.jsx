import { header } from '../../portfolio'
import NavBar from '../NavBar/navBar'
import './header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='header-link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <NavBar />
    </header>
  )
}

export default Header
