import React, { useState } from 'react'

const mystyles = {width: 300, padding: 10, border: '1px solid', margin:10}

const UserForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(`Your name is ${firstname} ${lastname}`);
  }

  return (
    <form style={mystyles} onSubmit={onSubmitHandler}>
      <label>First name</label><br/>
      <input
        type='text'
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      /><br/>
      <label>Last name</label> <br/>
      <input
        type='text'
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      /><br/><br/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default UserForm