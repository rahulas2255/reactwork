import './App.css';
import Employee from './Employee';
import User from './User';


function App() {
  // js cose
  let username = "Walter White"
  const updateUser = (uname)=>{
    console.log(uname);
  }
  const inputstyle = {borderRadius:'10px',padding:'10px',width:'400px',marginLeft:'10px'}
  return (
    <div className='main'>
      <h1 style={{color:'red',fontSize:'100px'}} className=''>APP Component</h1>
      <h2>Data</h2>
      <label htmlFor="username">
        Username
      </label>
      <input style={inputstyle} type="text" id='username' placeholder={username} onChange={e=>updateUser(e.target.value)} />
      <Employee username={username} />

      <User/>

    </div>
  );
}

export default App;
