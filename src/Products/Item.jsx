import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

function Item({name,category,price,image, id}){
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({ id, name, category, price, image });
    };

    return (
        <div className="product-card">
            <Link to={`/products/${id}`} className="product-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="product-image">
                    <img src={image} alt={name} />
                </div>
                <div className="product-info">
                    <div className="product-category">{category}</div>
                    <div className="product-name">{name}</div>
                    <div className="product-desc">{name.substring(0, 30)}...</div>
                    <div className="product-footer">
                        <div className="product-price">${price}</div>
                        <button type="button" className="add-btn" onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart();
                        }}>+ Add</button>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default Item