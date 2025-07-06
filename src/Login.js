import React from 'react';

export default function Login() {
  return(
    <>
    <h1>Login</h1>
    <hr />
    <form method="POST">
      <label for="email" >Email:</label>
      <input type="text" id="email" />
      <br />
      <label for="password" >Password:</label>
      <input type="password" id="password" />
      <br />
      <input type="submit" value="Submit" />
    </form>
    </>
  );
}
