import React, { Component } from 'react';
import { 
	BrowserRouter  as Router, 
	Route, 
	Switch
} from 'react-router-dom'
import Login from './pages/Login';
import Main from './pages/Main';




interface AppProps {

}
interface AppState {

}
class App extends Component <AppProps, AppState>{
    public constructor(props : AppProps) {
        super(props)
    }

    public render() : JSX.Element {
        return (
            

							<Router>
								
									<Route path="/" component={Login} exact/>
									<Route path="/index" component={Main}></Route>
								
								
								{/* <Route path="about" element={<About />} /> */}
							</Router>
            
        )
    }
}
export default App;

