export function renderLoginForm(){
    return `
    <form id="loginForm">
    <label>Username</label>
    <input type="text" name="username" required></input>
    <label>Password</label>
    <input type="password" name="password" required></input>
    <button type="submit" >Login</button>
    <p id="message"></p>
    </form>
    `;
}
