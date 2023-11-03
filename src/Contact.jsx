import React, { useState } from 'react';

const Contact = () => {

  const[data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });

  const InputEvent = (event) => {
    const{name, value} = event.target; 
    setData((preVal) => {
      return {
        ...preVal, 
        [name] : value,

      }
    }) 
  };
  const formSubmit = (e) => {
    e.preventDefault(); 
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. and emai id id ${data.email}`)
  };

  return ( 
  <>
    <div className="my-5">
      <h1 className="text-center"> Contact us </h1>

    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto"> 
        <form onSubmit={formSubmit}>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              Full Name
            </label>
            <input 
              type="text" 
              class="form-control" 
              id="exampleFormControlInput1" 
              name="fullname"
              value={data.fullname}
              onChange={InputEvent}
              placeholder="Enter your Full Name" />
          </div>   

          <div class="form-group">
            <label for="exampleFormControlInput1">
              Mobile Number
            </label>
            <input 
              type="number" 
              class="form-control" 
              id="exampleFormControlInput1" 
              name="phone"
              value={data.phone}
              onChange={InputEvent}
              placeholder="Enter your Mobile Number" />
          </div>   

          <div class="form-group">
            <label for="exampleFormControlInput1">
              Email address
            </label>
            <input 
              type="email" 
              class="form-control" 
              id="exampleFormControlInput1" 
              name="email"
              value={data.email}
              onChange={InputEvent}
              placeholder="name@example.com" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Message
            </label>
            <textarea 
              class="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3">
   
            </textarea>
          </div>
          <br/>
          <div className="col-12">
            <button 
              class="btn btn-outline-primary" 
              type="submit">
                Submit form
            </button>
          </div>
        </form>

        </div>

      </div>

    </div>
  </>
  );
}

export default Contact;

/*


          <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Example multiple select</label>
            <select multiple class="form-control" id="exampleFormControlSelect2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

*/