import React  from 'react'
import FormInput from './components/form-input'

class App extends React.Component{
  constructor(){
      super()
      this.state={
          name:'',
          email:'',
          password:''
      }
  }
  handleChange=(event)=>{
      const {name,value}=event.target
      this.setState({[name]:value})
  }

  handleSubmit=(event)=>{
      event.peventDefault()
  }
  render(){
      return(
              <div className='sign-in'>
                  <h2>I already have an account</h2>
                  <span>Sign in with your email and password</span>
                  <form onSubmit={this.handleSubmit}>
                      <FormInput
                          name='email' 
                          placeholder='Email' 
                          type='email' 
                          handleChange={this.handleChange}
                      />
                      <FormInput
                          name='name' 
                          placeholder='name' 
                          type='text' 
                          handleChange={this.handleChange}
                      />
                      <FormInput
                          name='password' 
                          placeholder='Password' 
                          type='password' 
                          handleChange={this.handleChange}
                      />
                      <button type="submit">SUBMIT</button>
                    </form>
              </div>
            )
}
}
export default App
