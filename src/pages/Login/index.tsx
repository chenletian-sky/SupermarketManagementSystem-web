import React, {Component} from 'react';
import './index.css'


interface LoginProps {
  history:any
}
interface LoginState {

}
class Login extends Component <LoginProps, LoginState>{
    public constructor(props : LoginProps) {
        super(props)
    }

    public componentDidMount(){
      const labels = document.querySelectorAll('.form-control label')

      labels.forEach(label => {
          label.innerHTML = label.innerHTML 
              .split('')
              .map((letter: any, idx: number) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
              .join('')
      })
    }

    public render() : JSX.Element {
        return (
            <div id='login-body'
              style={{
                // height:"100%",
                // width:"100%"
              }}
            >
              <div className="container">
                <h1>超市供销管理系统</h1>
                <form>
                  <div className="form-control">
                    <input type="text" required />
                    <label>用户名</label>
                     
                  </div>

                  <div className="form-control">
                    <input type="password" required />
                    <label>密码</label>
                  </div>

                  <button className="btn"
                    onClick = {() => {
                      this.props.history.push('/index')
                    }}
                  >登录</button>

                  {/* <p className="text">Don't have an account? <a href="#">Register</a> </p> */}
                </form>
              </div>
            </div>
              
        )
    }
}
export default Login;