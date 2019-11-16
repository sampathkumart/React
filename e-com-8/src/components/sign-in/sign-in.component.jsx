import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email:'',
            password:''
        }
    }
    handlesubmit= event =>{
        event.preventDefault();

        this.setState({ email:'', password:''})
    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({ [name]: value })
    }


    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <from onSubmit={this.handlesubmit}>
                    <input 
                    name="email" 
                    type="email" 
                    onChange={this.handleChange}
                    value={this.state.email}
                    required
                    />

                    <label>Email</label>
                    <input 
                    name="password" 
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.email} 
                    required
                     />
                    <label>Email</label>

                    <input type="submit" value="Submit Form"></input>
                </from>
            </div>
        )
    }
}
export default SignIn;