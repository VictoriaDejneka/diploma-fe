import React, {Component} from 'react';
import style from './Home.module.css'
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className={style.home}>
              <div className={style.buttons}>
                <Link to="/employees-test" className="btn btn-primary btn-lg m-1">Працівники</Link>
                <Link to="/goods-test" className="btn btn-secondary btn-lg m-1">Товари</Link>
              </div>
            </div>
        );
    }
}

export default Home;