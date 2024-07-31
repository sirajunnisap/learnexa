import "./footer.scss";

const Footer = () => {

  return (
    <div className="footer">

      
      <h4 className="head-h4">Quick Links</h4>
    
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

      <h4  className="head-h4">Subjects</h4>
      <ul className="list">
        <li>
          <a href="#Homepage">Arabic</a>
        </li>
        <li>
          <a href="#Homepage">English</a>
        </li>
        <li>
          <a href="#Homepage">Hindi</a>
        </li>
        </ul>
        <h4 className="head-h4">locate Us</h4>
      <p className="locate">learnexa HQ, alinchuvad , kizhisseri ,areekode road,kerala 673632</p>
     
      <h4  className="head-h4">Contact Us</h4>
      <div className="connect">
      <a href="#" className="email"><i className="fa-solid fa-envelope"></i>learnexaOfficial@gmail.com</a>
      <a href="#" className="phone"><i className="fa-solid fa-phone"></i>+91 123 5678 9024</a>
      
      </div>
      
      {/* <div className="connect">
      <a href="#" className="email"><i className="fa-solid fa-envelope"></i>learnexaOfficial@gmail.com</a>
      <a href="#" className="phone"><i className="fa-solid fa-phone"></i>+91 123 5678 9024</a>
      </div> */}
     <div className="social">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
      </div>
      <p className="copyright">2024 copy right | all right reserved</p>
      <div>

      </div>
      
    </div>
  );
};

export default Footer;
