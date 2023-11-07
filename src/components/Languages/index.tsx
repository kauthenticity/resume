import {Duration} from '@lib/Duration';

function Languages() {
    return (
        <section className="container">
            <h1>
                <img className="icon" src="images/Languages.png" alt="" /> Languages
            </h1>
            <section className="subContainer">
                <h2>TOEIC 935</h2>
                <Duration duration="2021.08.29" />
            </section>
            <section className="subContainer">
                <h2>OPIc IH</h2>
                <Duration duration="2023.03.11" />
            </section>
        </section>
    );
}

export default Languages;
