import './App.css';
import { useState } from 'react';

function App() {

  const[formData, setFormData] = useState({firstName:"", lastName: "", email:"", country:"", address:"", city:"", state:"", pin:"", comments:false, candidates:false, offers:false, nautification:""  })

  function ChangeHandler(event){

    const {name , value, checked, type} = event.target;

    setFormData(prevData => {
      return{
        ...prevData,
        [name]: type === "checkbox"? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }

  return (
    <div className="flex flex-col justify-center items-center">
    <h1 className='text-lg font-bold'> Fill out this form </h1>
    <form className="flex flex-col w-[800px] p-5 bg-gray-100 mt-3 gap-2" onSubmit={submitHandler} border rounded-md>

      <label>First Name</label>
      <input 
      className="border rounded-md w-[100] h-8 p-2"
      type="text"
      placeholder='Lionel'
      onChange={ChangeHandler}
      name="firstName"
      value={formData.firstName}
      />

      <label>Last Name</label>
      <input 
      className="border rounded-md w-[100] h-8 p-2"
      type="text"
      placeholder='Messi'
      onChange={ChangeHandler}
      name="lastName"
      value={formData.lastName}
      />

      <label>Email Address</label>
      <input 
      className="border rounded-md w-[100] h-8 p-2"
      type="email"
      placeholder='lm@gmail.com'
      onChange={ChangeHandler}
      name="email"
      value={formData.email}
      />

      <label htmlFor="country">Country</label>
      <select
      className="border rounded-md w-[100] h-8 p-2"
      name="country"
      onChange={ChangeHandler}
      id="country"
      value={formData.country}
      >
        <option value="">Choose a option</option>
      <option value="India">India</option>
      <option value="Argentina">Argentina</option>
      <option value="Spain">Spain</option>
      </select>

      <label>Street Address</label>
      <input 
      className="border rounded-md w-[100] h-8 p-2"
      type="text"
      placeholder='Address'
      onChange={ChangeHandler}
      name="address"
      value={formData.address}
      />

      <label>City</label>
      <input 
      className="border rounded-md w-[100] h-8 p-2"
      type="text"
      placeholder='City'
      onChange={ChangeHandler}
      name="city"
      value={formData.city}
      />

      <label>State</label>
      <input 
      className="border rounded-md w-[100] h-8 p-2"
      type="text"
      placeholder='State'
      onChange={ChangeHandler}
      name="state"
      value={formData.state}
      />

      <label>PIN</label>
      <input 
      className="border rounded-md w-[100] h-8 p-2"
      type="text"
      placeholder='302020'
      onChange={ChangeHandler}
      name="pin"
      value={formData.pin}
      />

      <fieldset>
        <legend className='mb-3'>By Email</legend>
      <input 
      className="border rounded-md w-[100] "
      type="checkbox"
      id="comments"
      name="comments"
      onChange={ChangeHandler}
      checked={formData.comments}
      />
      <label htmlFor='comments' className="ml-2">Comments <br/> <span className="text-gray-400 ml-5">Get notified</span></label>

      <br />

      <input 
      className="border rounded-md w-[100] "
      type="checkbox"
      id="candidates"
      name="candidates"
      onChange={ChangeHandler}
      checked={formData.candidates}
      />
      <label htmlFor='candidates' className="ml-2">Candidates<br/> <span className="text-gray-400 ml-5">Get notified</span></label>

      <br />

      <input 
      className="border rounded-md w-[100]"
      type="checkbox"
      id="offers"
      name="offers"
      onChange={ChangeHandler}
      checked={formData.offers}
      />
      <label htmlFor='offers' className="ml-2">offers<br/> <span className="text-gray-400 ml-5">Get notified</span></label>

      </fieldset>

      <fieldset className='m-3 gap-y-2'>
        <legend>By Mail : </legend>
      <input
      type="radio"
      id="everything"
      name="nautification"
      onChange={ChangeHandler}
      value={formData.nautification === "everything"}
      />
      <label htmlFor='everything'>everything</label>
      
      <br/>

      <input
      type="radio"
      id="sameasemail"
      name="nautification"
      onChange={ChangeHandler}
      value={formData.nautification === "Same as Email"}
      />
      <label htmlFor='sameasemail'>Same as Email</label>

      <br/>
      
      <input
      type="radio"
      id="No_notifications"
      name="nautification"
      onChange={ChangeHandler}
      value={formData.nautification === "No notifications"}
      />
      <label htmlFor='No_notifications'>No notifications</label>
      </fieldset>

      <button className="bg-blue-400 w-[5vw] text-white p-2 rounded-sm hover:bg-blue-500">Submit</button>
    </form>
    </div>
  );
}


export default App;
