import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useCart } from '../CartContext';
import Logo from "../LoginPage/Logo";


function Navbar(){
    const { isAuthenticated, logout } = useAuth();
    const { cartItems } = useCart();
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <Logo source="/logo192.png" />
                    <span>ShopHub</span>
                </div>
                <div className="navbar-search">
                    <input type="text" placeholder="Search products..."/>
                </div>
            </div>
            <div className="navbar-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/" className="nav-link active">Products</Link>
                <span className="nav-link">About</span>
                <Link to="/cart" className="nav-link cart-icon-container">
                    🛒
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </Link>
                {isAuthenticated ? (
                    <button onClick={logout} className="nav-link" style={{ background: 'none', cursor: 'pointer' }}>Logout</button>
                ) : (
                    <Link to="/login" className="nav-link">Login</Link>
                )}
                <div className="profile-avatar">JD</div>
            </div>
        </div>
    )
}


export default Navbar;