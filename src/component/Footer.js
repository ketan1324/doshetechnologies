import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <React.StrictMode>
      <div className="copyright-details">
        <div className="about-social-icon text-center">
          <ul className="about-social">
            
            <li className="wow fadeIn" data-wow-delay=".6s">
              <a
                href="https://www.linkedin.com/in/ketan-doshi1324"
                target="newtab"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".2s">
              <a href="https://www.facebook.com/himanshu.devi.1" target="newtab">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".4s">
              <a
                href="https://www.instagram.com/ketan_doshi13"
                target="newtab"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
           
            <li className="wow fadeIn" data-wow-delay="1.2s">
              <a href="https://github.com/ketan1324" target="newtab">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <h3>&copy; {currYear}, Made with ❤️ by Doshi Tech</h3>
        </div>
        <a
          href="//www.dmca.com/Protection/Status.aspx?ID=4ce89e88-486f-4e19-9159-e412a842118e"
          title="DMCA.com Protection Status"
          class="dmca-badge"
        >
          <img
            src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=4ce89e88-486f-4e19-9159-e412a842118e"
            alt="DMCA.com Protection Status"
          />
        </a>
        <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
      </div>
    </React.StrictMode>
  );
}

export default Footer;
