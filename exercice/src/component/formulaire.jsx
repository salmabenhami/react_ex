import React, { useState } from 'react';
import Affichage from './form';


function Formulaire() {
  const [fullname, setFullName] = useState("");
  const [lastname, setLast] = useState("");
  const [adress, setAdress] = useState("");
  const [adress2, setAdress2] = useState("");    
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [genre, setGenre] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showData, setShowData] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowData(true); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label><br />
        <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} /> <br />
        
        <label>Last Name</label><br />
        <input type="text" value={lastname} onChange={(e) => setLast(e.target.value)} /> <br />
        
        <label>Street Address</label><br />
        <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} /> <br />
        
        <label>Address Line 2</label><br />
        <input type="text" value={adress2} onChange={(e) => setAdress2(e.target.value)} /> <br />
        
        <label>City</label><br />
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> <br />
        
        <label>State</label><br />
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="tanger">Tanger</option>
          <option value="tetouan">Tetouan</option>
        </select><br />
        
        <label>Zip Code</label><br />
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} /> <br />
        
        <label>Phone Number</label><br />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />
        
        <label>Email Address</label><br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        
        <label>Choose your membership level</label><br />
        <input type="radio" name="genre" value="Bronze" onChange={(e) => setGenre(e.target.value)} /> Bronze
        <input type="radio" name="genre" value="Silver" onChange={(e) => setGenre(e.target.value)} /> Silver
        <input type="radio" name="genre" value="Gold" onChange={(e) => setGenre(e.target.value)} /> Gold
        <input type="radio" name="genre" value="Platinium" onChange={(e) => setGenre(e.target.value)} /> Platinium <br />
        
        <label>
          <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
          Terms and conditions
        </label><br />
        
        <button type="submit">Submit</button>
      </form>

      {showData && (
        <Affichage 
          fullname={fullname} 
          lastname={lastname} 
          adress={adress} 
          adress2={adress2} 
          city={city} 
          state={state} 
          code={code} 
          phone={phone} 
          email={email} 
          genre={genre} 
        />
      )}
    </div>
  );
}

export default Formulaire;
