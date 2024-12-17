import React from 'react'
import { useState } from 'react';
import { create } from '../../services/mediaService';



const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password:'',
      });
      const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
      };
      const handleCreate = async (evt) => {
        evt.preventDefault()
        try { 
          const newMedia = await create(formData)
          console.log('Created New Media:',newMedia)
          onClose(false)
        } catch (error) {console.log(error)}
      };
  return (
    <div className='form-container'>
      <form onSubmit={handleCreate} className='register-form'>
        <label htmlFor="username">Username</label>
        <input type="text" name='username'id='username' value={formData.username} onChange={handleChange} required/>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' value={formData.password} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterForm





// <div className="form-container">
// <form onSubmit={handleCreate} className="add-form">
//   <label htmlFor="name"> Name: </label>
//   <input
//     type="text"
//     name="name"
//     id="name"
//     value={formData.name}
//     onChange={handleChange}
//     required
//   />