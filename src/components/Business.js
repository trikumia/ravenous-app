import './Business.css';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90    
};


const Business = () => {
    return (
        <div className={Business}>
            <div className={Business.imageContainer}>
                <img src={business.imageSrc} alt="image" />
            </div>
            <h2>{business.name}</h2>
            <div className={Business.BusinessInformation}>
                <div className={Business.BusinessAdress}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className={Business.BusinessReviews}>
                    <h3>{business.category}</h3>
                    <h3 className={Business.rating}> {business.rating} </h3>
                    <p>{business.reviewCount} reviews</p>
                </div>

            </div>

        </div>
    );

};
export default Business;