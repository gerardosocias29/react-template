import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { login, isLoggedIn, apiToken} = useContext(AuthContext); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(email, password, rememberMe);
    login(email);
  }

  useEffect(() => {
    if (isLoggedIn && apiToken) {
      window.location.replace('/main');
    }
  }, [isLoggedIn, apiToken]);

  return (
    <div className='flex justify-center items-center min-h-screen w-screen text-sm p-4 bg-[#eff2f8]'>
      <div className="w-full xl:w-1/3 lg:w-1/2 rounded-[56px] h-[500px] p-1" style={{background: 'linear-gradient(180deg, rgb(239 68 68) 10%, rgba(33, 150, 243, 0) 30%)'}}>
        <div className="rounded-[53px] bg-white border-5 border-transparent w-full h-full lg:p-[5rem] p-5">
          <div className="flex flex-col justify-center gap-1 mb-[3rem]">
            <p className="text-2xl text-center">Welcome!</p>
            <p className="text-center">Sign in to continue</p>
          </div>
          <form method="POST" onSubmit={handleOnSubmit}>
            <div className="grid lg:grid-cols-1 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold">Email Address</label>
                <InputText required id="email" type="email" keyfilter="email" value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} className="text-sm" autoComplete="new-email"/>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-semibold">Password</label>
                <Password required id="password" inputClassName="w-full text-sm" value={password} placeholder="Password" feedback={false} tabIndex={1} toggleMask onChange={(e) => setPassword(e.target.value)} className="text-sm" autoComplete="new-password"/>
              </div>
              <div className="flex justify-between gap-1">
                <div className="flex items-center">
                  <Checkbox inputId="remember_me" name="remember_me" onChange={e => setRememberMe(e.checked)} checked={rememberMe}></Checkbox>
                  <label htmlFor="remember_me" className="ml-2">Remember Me</label>
                </div>
                <div>
                  {/* <a className="text-semibold hover:underline hover:text-red-500" href="">Forgot password?</a> */}
                </div>
              </div>
              
              <div>
                <Button type="submit" className="w-full bg-red-500 border-red-500 text-sm" label="Login"/>
              </div>

              <div>
                Don't have an account? <Link to="/signup" className="text-semibold hover:underline hover:text-red-500">Register now</Link>
              </div>
            </div> 
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
