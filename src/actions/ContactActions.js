import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Message } from '@mui/icons-material';


export const Contact = () => {

  let history = useHistory();


  const [ContactId, setContactId] = useState()
  const [name, setName] = useState(null)
  const [Email, setEmail] = useState(null)
  const [Message, setMessage] = useState(null)



  const addNewStudent = async () => {
    let formField = new FormData()
    formField.append('name', name)
    formField.append('Email', Email)
    formField.append('Message', Message)


    if (ContactId !== null) {
      formField.append('ContactId', ContactId)
    }

    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/contact',
      data: formField,

      x: JSON.stringify(formField)
    }).then(response => {
      console.log(response.x);
      history.push('/')
    })
  }

  return (
    <div className="container">
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A Student</h2>


          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your ID"
              name="ContactId"
              value={ContactId || ""}
              onChange={(e) => setContactId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="Email"
              value={Email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your address Name"
              name="Message"
              value={Message || ""}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={addNewStudent}>Add Contact</button>

        </div>
      </div>
    </div>
  );
};

export default Contact;