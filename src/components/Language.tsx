import { Duration } from "./Duration"
import LanguageIcon from "../static/images/Languages.png"
export const Language = () => {
  return (
    <section className="container">
      <h1>
        <img className="icon" src={LanguageIcon} /> Languages
      </h1>
      <section className="subContainer">
        <h2>TOEIC 935</h2>
        <Duration duration="2021.08.29" />
      </section>
    </section>
  )
}
