import './login.css'
import { Card } from '../../components/card/card'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../firebase'
import { isAdmin } from '../../api/auth'
import { useNavigate } from 'react-router'
import { useAuth } from '../../state/hooks/use-auth'

export const Login = () => {
  const { setAdminAuthenticated } = useAuth()
  const navigate = useNavigate()

  const login = (e: any) => {
    e.preventDefault()
    const email = e.target.elements.username.value
    const password = e.target.elements.password.value
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const email = userCredential.user.email
        if (email && isAdmin(email)) {
          setAdminAuthenticated(true)
          navigate('/')
        }
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
      })
  }

  return (
    <div className="login-page">
      <Card className="login-card">
        <div className="login-form-container">
          <form id="login" className="login-form" onSubmit={login}>
            <div className="form">
              <label htmlFor="username">username</label>
              <br></br>
              <input id="username" name="username" type="email" />
              <label htmlFor="password">password</label>
              <input id="password" name="password" type="password" />
              <button type="submit">login</button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}
