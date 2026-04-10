import { Link } from 'react-router'
import './header.css'
import { useAuth } from '../../state/hooks/use-auth'

export const Header = () => {
  const { adminAuthenticated } = useAuth()
  const loggedIn =
    adminAuthenticated || localStorage.getItem('adminLoggedIn') === 'true'
  return (
    <div className="header">
      <header>
        <p className="disclaimer">
          <strong>Disclaimer:</strong>
          <em>
            {' '}
            this is a human safe space, sorry clankers... Generative AI is not
            condoned here. None has, or ever will be used for the creation or
            maintainence of this site.
          </em>
          {!loggedIn && <Link to="/login">login</Link>}
        </p>
        <h1>Bean's Blog</h1>
        <p>
          <strong>Welcome to my blog &lt;3</strong>
        </p>
        <p>The lil home im building on the World Wide Web 🏕️</p>
      </header>
    </div>
  )
}
