import React from 'react'
import  { Card ,  Button, Form, FormGroup, Input } from "reactstrap";


function Signin() {
    return (
        <div>
            
            <FormGroup>

        <div className="pt-3">
          <Input placeholder="Email" />
        </div>
        <div className="pt-3">
          <Input placeholder="Password" />
        </div>

        <div className="d-flex justify-content-center pt-5">
          <Button className="btn btn-success me-5">Submit</Button>
          <Button className="btn btn-danger ms-5">Reset</Button>
        </div>
      </FormGroup>


        </div>
    )
}

export default Signin
