import { useRef, useState, useEffect } from 'react'
import loginImg from '../assets/login/login.jpg'

   const userRef = useRef();
const errRef = useRef();
const [user, setUser] = useState('');
const [pwd, setpwd] = useState('');
const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false); 

useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    setErrMsg('');
}, [user, pwd])

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setpwd('');
    setSuccess(true);
}

export default function Login() {

return (
        <>
            {success ? (
                <section>
        <h1>You are logged in!</h1>
        <br />
        <p>
        <a href="#">Go To Home</a>
        </p>
                </section >
            ) : (

        <section className='grid grid-cols-2 sm:grid-cols-2 h-screen w-full '>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>

            <div className='bg-gray-800 flex flex-col justify-center'>
                <form
                    action="/api/login"
                    method="post"
                    className='max-w-[500px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'
                    onSubmit={handleSubmit}
                >
                    <h2 className='text-4xl text-white font-bold text-center'>LOGIN</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label htmlFor="username">Username</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                            type="text"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                            type="password"
                            onChange={(e) => setpwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <p id='#'>Forgot Password</p>
                    </div>
                    <button id="#" className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SUBMIT</button>

                </form>
                <p>
                    Need an account?<br />
                    <span className="line">
                        {/*put router lin here */}
                        <a href="#" >Sign Up</a>
                    </span>

                </p>
            </div>
        </section>
    )
}
            </>
            )
}