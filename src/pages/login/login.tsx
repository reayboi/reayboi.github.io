import "./login.css";
import { Card } from "../../components/card/card";

export const Login = () => {

    const login = (e: any) => {
            e.preventDefault();
        console.log(e)
    }

    return (
        <div className="login-page">
            <Card className='login-card'>
                <div className='login-form-container'>
                    <form id='login' className="login-form" onSubmit={login}>
                        <div className="form">
                            <label htmlFor='username'>username</label><br></br>
                            <input id='username' name="username" type="email"/>
                            <label htmlFor='password'>password</label>
                            <input id='password' name="password" type="password" />
                            <button type="submit">login</button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>


    )
}