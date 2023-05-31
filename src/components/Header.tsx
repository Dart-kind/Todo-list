
import titleImg from '../../public/assets/titleImg.png';

const Header = () => {

  return (
    <div className="header">
      <div className="header__logo">
        <img src={titleImg} alt="logo" />
      </div>
      <div className="header__title">My title list</div>
    </div>
  );
};

export default Header;
