export default function Login() {
  return(
    <>
    <h1>Login</h1>
    <hr />
    <form method="POST">
      <label htmlFor="email" >Email:</label>
      <input type="text" id="email" />
      <br />
      <label htmlFor="password" >Password:</label>
      <input type="password" id="password" />
      <br />
      <input type="submit" value="Submit" />
    </form>
    </>
  );
}
