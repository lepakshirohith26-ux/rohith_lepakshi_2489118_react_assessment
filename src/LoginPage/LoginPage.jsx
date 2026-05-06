import Form from "./Form";
import Logo from "./Logo";
import { WelcomeTextSideA } from "./WelcomeText";

function LoginPage(){
    return (
        <div className="login-container">
            <div className="login-left">
                <div className="login-logo-container">
                    <Logo source="/logo192.png" />
                    <span>ShopHub</span>
                </div>
                <WelcomeTextSideA />
                <div className="divider"></div>
            </div>
            <div className="login-right">
                <Form />
            </div>
        </div>
    )
}

export default LoginPage;