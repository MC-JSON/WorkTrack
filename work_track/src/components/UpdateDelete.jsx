import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


//built for edits
const InformationHolding = (props) => {
  
  const [formValue, setFormValue] = useState({
    name: props.name,
    types: props.types,
    description: props.description,
    price: props.price,
    image: props.image
  })

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  const { name, types, description, price, image } = formValue

  let navigate = useNavigate()

  //handles update submit and navigates back 
  const handleSubmit = async (e) => {
    e.preventDefault()
      await axios.put(`http://localhost:3001/update/${props.id}`, formValue)
      navigate('/')
  }

//handles delete submit and navigates back to types
  const handleSubmit2 = async (e) => {
    e.preventDefault()
      await axios.delete(`http://localhost:3001/delete/${props.id}`, formValue)
      navigate('/')
  }


  //edit button left in for when user authentication is ready to deploy
  return (
    <div className="card2">
    <div className="img-wrapper">
      <img src={props.image} alt="types" />
    </div>
    <div className="info-wrapper">
      <h3>{props.name}</h3>
      <h4>{props.types}</h4>
      <h4>{props.price}</h4>
      <p>{props.description}</p>
      {/* <button>Edit</button> */}
      <form onSubmit={handleSubmit}>
      <input
          className="form"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="types"
          placeholder="Type"
          value={types}
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="price"
          placeholder="Price"
          value={price}
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="image"
          placeholder="Image"
          value={image}
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Submit</button>
      <button onClick={handleSubmit2}>Delete</button>
      </form>
    </div>
    </div>
  )
}

export default InformationHolding