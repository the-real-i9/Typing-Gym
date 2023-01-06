import './UserAuthModal.scss'

const UserAuthModal = () => {
  return (
    <div className='user-auth-modal-wrapper'>
        <div className="user-auth-modal">
            <div className="logo-wrapper">
                <div className="logo">LOGO</div>
            </div>
            <div className="form-wrapper">
                <form action="">
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' id='username' required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="conf-password">Confirm Password</label>
                        <input type="password" name='conf-password' id='conf-password' required />
                    </div>
                    <button type='submit'>Login or Sign Up</button>
                </form>
            </div>
            <a className="login-instead">Have an Account? Login</a>
        </div>
    </div>
  )
}

export default UserAuthModal