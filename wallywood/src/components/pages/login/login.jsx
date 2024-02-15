import axios from "axios"
import { ContentWrapper } from "../../app/elements/contentwrapper/contentwrapper"
import { useAuth } from "../../app/providers/authProvider"

const Login = () => {

  const {loginData, setLoginData} = useAuth()

  const submitHandle = async e => {
    const formdata = new URLSearchParams()
    formdata.append('username', e.target.form.username.value)
    formdata.append('password', e.target.form.password.value)

    const endpoint = 'http://localhost:4000/login'
    try {
      const result = await axios.post(endpoint, formdata)
      handleSessionData(result.data)
    } catch (err) {
      console.error(`kunne ikke logge ind: ${err}`)
    }
  }

  const handleSessionData = data => {
    if (data) {
      sessionStorage.setItem('token', JSON.stringify(data))
      setLoginData(data)
    }
  }

  const Logout = () => {
    sessionStorage.removeItem('token')
    setLoginData('')
  }

  return (
    <ContentWrapper
      title='login'>

      {!loginData ? (
        <form method="POST">
          <div>
            <label htmlFor="username">brugernavn: </label>
            <input type="text" name="username" />
          </div>
          <div>
            <label htmlFor="password">adgangskode: </label>
            <input type="password" name="password" />
          </div>
          <div>
            <button type="button" onClick={e => submitHandle(e)}>login</button>
          </div>
        </form>

      ) : (
        <div>
          <p>du er logget ind som {`${loginData.firstname} ${loginData.lastname}`}</p>
          <button type="button" onClick={() => Logout()}>log ud</button>
        </div>
      )}
    </ContentWrapper>
  )
}

export default Login
