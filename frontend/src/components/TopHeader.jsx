import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitch from "./LanguageSwitch";

 
const TopHeader = () => {
    return (
      <div>
        <div className="top-header-wrapper bg-red-500 py-2 hidden lg:block">
          <div className="px-[5%] flex items-center">
            <div className="phone">
              <a
                href="tel:+01766-358772"
                target="_blank"
                className="text-white"
              >
                <FontAwesomeIcon icon={faPhone} className="me-1" />
                01766-358772
              </a>
            </div>
            <a
              href="mailto:admin@ramitbd.com"
              target="_blank"
              className="ms-12"
            >
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
              admin@ramitbd.com
            </a>
            <div className="ml-auto">
              <LanguageSwitch></LanguageSwitch>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TopHeader;