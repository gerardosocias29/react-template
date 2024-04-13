import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const {isLoggedIn, apiToken} = useContext(AuthContext); 

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password, username, phone);
  }

  useEffect(() => {
    if (isLoggedIn && apiToken) {
      window.location.replace('/main');
    }
  }, [isLoggedIn, apiToken]);
  return (
    <div className='flex justify-center items-center min-h-screen w-screen text-sm p-4 bg-[#eff2f8]'>
      <div className="w-full xl:w-1/3 lg:w-1/2 rounded-[56px] min-h-[500px] p-1" style={{background: 'linear-gradient(180deg, rgb(239 68 68) 10%, rgba(33, 150, 243, 0) 30%)'}}>
        <div className="rounded-[53px] bg-white border-5 border-transparent w-full h-full lg:p-[5rem] p-5">
          <div className="flex flex-col justify-center gap-1 mb-[3rem]">
            <p className="text-2xl text-center">Create your account</p>
            <p className="text-center">Sign up now</p>
          </div>
          <form method="POST" onSubmit={handleOnSubmit}>
            <div className="grid lg:grid-cols-1 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-semibold">Name</label>
                <InputText id="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} className="text-sm" autoComplete="off"/>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold">Email Address</label>
                <InputText id="email" keyfilter="email" value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} className="text-sm" autoComplete="new-email"/>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="font-semibold">Phone Number</label>
                <InputText id="phone" value={phone} placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} className="text-sm" autoComplete="off"/>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="username" className="font-semibold">Username</label>
                <InputText id="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="text-sm" autoComplete="new-username"/>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-semibold">Password</label>
                <Password id="password" inputClassName="w-full text-sm" value={password} placeholder="Password" feedback={false} tabIndex={1} toggleMask onChange={(e) => setPassword(e.target.value)} className="text-sm" autoComplete="new-password"/>
              </div>
              
              <div>
                <Button type="submit" className="w-full bg-red-500 border-red-500 text-sm" label="Register"/>
              </div>

              <div>
                Already have an account? <Link to="/login" className="text-semibold hover:underline hover:text-red-500">Login</Link>
              </div>
            </div> 
          </form> 
        </div>
      </div>
    </div>
  );
}

export default Signup;
