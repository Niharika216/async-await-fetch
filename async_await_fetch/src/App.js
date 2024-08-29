import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [details,setDetails]=useState([]);
  let getDetailsFromServer=async (ele,i)=>{
    let reqOptions={method:"GET"}
    let JSONData=await fetch("https://freetestapi.com/api/v1/actresses",reqOptions);
    let JSOData=await JSONData.json();
    setDetails(JSOData);
    console.log(JSOData);
  }
  let getActorsDetailsFromServer=async (ele,i)=>{
    let reqOptions={method:"GET"}
    let JSONData=await fetch("https://freetestapi.com/api/v1/actors",reqOptions);
    let JSOData=await JSONData.json();
    setDetails(JSOData);
    console.log(JSOData);
  }
  useEffect(()=>{
    getActorsDetailsFromServer();
  },[])
  return (
    <div className="App">
      <div>
        <button onClick={()=>{getDetailsFromServer()}}>
          Get Actress Details
        </button>
      </div>
      <div className='detailsContainer'>
        {details.map((ele,i)=>{
          return(
            <div className='detailsDiv'>
              <img src={ele.image} title={ele.biography}></img>
              <h4>Name:{ele.name}</h4>
              <h4>Awards :{ele.awards}</h4>
              <h4>Biography:{ele.biography}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
