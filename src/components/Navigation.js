import {Link} from 'react-router-dom';
import './Navigation.css';
function Navigation(){
    return(
        <div className="nav">
            <Link to="/">Home</Link>

            { /* pathname 은 url 의미 state는 route props 에 전할 데이터를 의미 */ }
            {/*<Link to={{pathname:'./about',state:{fromNaviagation: true}}}>About</Link>*/}

            <Link to='/about'>About</Link>
        </div>
    );
}

export default Navigation;