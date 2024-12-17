import React from 'react'

const SignInModal = () => {
    const [formData, setFormData] = useState({
            username: "",
            password:'',
          });
          const handleChange = (evt) => {
            setFormData({ ...formData, [evt.target.name]: evt.target.value });
          };
  return (
    <div className='form-container'>
       <label htmlFor="username">Username</label>
        <input type="text" name='username'id='username' value={formData.username} onChange={handleChange} required/>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' value={formData.password} onChange={handleChange} />
        <button>Submit</button>
    </div>
  )
}

export default SignInModal




