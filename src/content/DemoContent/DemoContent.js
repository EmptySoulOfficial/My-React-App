import './DemoContent.css'
import { getLang } from '../../assets/js/ELanguage/ELanguage'
import Icon from '../../assets/js/Icon/Icon'
// import logo from '../../logo.svg';
import { ReactComponent as Logo } from "../../logo.svg";

function DemoContent({packageversion}) {

    const eLang = getLang()

    return (
        <div className="demoContent">
            {/* <img src={logo} className="appLogo" alt="logo" /> */}
            <Logo className="appLogo"/>
                <p>
                  {eLang.reactboilerplate} <Icon name="heart" size="25" color=""/>
                </p>
                <a
                  className="appLink"
                  href="https://github.com/EmptySoulOfficial/My-React-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open GitHub
                </a>
            <p className="textWatermark">Version: {packageversion}</p>
      </div>
    )
}

export default DemoContent
