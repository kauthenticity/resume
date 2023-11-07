import {Duration} from '@lib/Duration';
import Title from '@lib/Title';

function Languages() {
    return (
        <section className="container">
            <Title text="Languages" />

            <section className="sub__container">
                <h2>TOEIC 935</h2>
                <Duration duration="2021.08.29" />
            </section>
            <section className="sub__container">
                <h2>OPIc IH</h2>
                <Duration duration="2023.03.11" />
            </section>
        </section>
    );
}

export default Languages;
