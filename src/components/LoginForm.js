import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
      <div className='card container-sm' id='formBorder'>
        <div className='card-body'>
            <h3 className='text-center'>Login</h3>
            <br/>
            <form>
                <div className='form-group'>
                    <label for='username'>Username</label>
                    <input type='text' className='form-control' id='username' placeholder='Username'/> <br></br>
                    <label for='Password'>Password</label>
                    <input type='password' className='form-control' id='password' placeholder='Password'/>
                </div> <br></br>
                <button type='submit' className='btn btn-info'>Login</button>
            </form>
        </div>
      </div>
    )
  }
}
