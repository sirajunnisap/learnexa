import "./footer.scss";

const Footer = () => {

  return (
    <div className="footer">

      <div className="social">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
      </div>
    
      <ul className="list">
        <li>
          <a href="#Homepage">Home</a>
        </li>
        <li>
          <a href="#Homepage">About</a>
        </li>
        <li>
          <a href="#Homepage">Courses</a>
        </li>
        <li>
          <a href="#Homepage">Career</a>
        </li>
        <li>
          <a href="#Homepage">contact</a>
        </li>
        {/* <li>
          <a href="#">Privacy policy</a>
        </li> */}
      </ul>
      <div className="connect">
      <a href="#" className="email"><i className="fa-solid fa-envelope"></i>learnexaOfficial@gmail.com</a>
      <a href="#" className="phone"><i className="fa-solid fa-phone"></i>+91 123 5678 9024</a>
      </div>
     
      <p className="copyright">2024 copy right | all right reserved</p>
      <div>

      </div>
      
    </div>
  );
};

export default Footer;
