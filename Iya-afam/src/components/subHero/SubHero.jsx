import { useNavigate } from 'react-router-dom';
import './SubHero.css'; // Import the CSS file

const SubHero = () => {
  const navigate = useNavigate();

  const showDrinks = () => navigate('/Drinks');
  const showFrozenFood = () => navigate('/FrozenFood');
  const showKerosene = () => navigate('/Kerosene');

  return (
    <div className="subhero-container">
      <div data-aos="fade-up" data-aos-delay="0" className="subhero-item" onClick={showDrinks}>
        <img src="src/assets/Images/Drinks.jpg" alt="Drink" className="subhero-image" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200" className="subhero-item" onClick={showFrozenFood}>
        <img src="src/assets/Images/Fish.jpeg" alt="Fish" className="subhero-image" />
      </div>
      <div data-aos="fade-up" data-aos-delay="400" className="subhero-item" onClick={showKerosene}>
        <img src="src/assets/Images/Kerosene.webp" alt="Kerosene" className="subhero-image" />
      </div>
    </div>
  );
};

export default SubHero;
