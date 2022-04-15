import { useNavigate } from 'react-router-dom'

//home page build
const Home = (props) => {
  let navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/signin')}>
        Please click here to login
      </button>
    </div>
  )
}

export default Home
