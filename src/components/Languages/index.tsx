import Divider from '@lib/Divider';
import {Duration} from '@lib/Duration';
import Title from '@lib/Title';

function Languages() {
    return (
        <section>
            <Title text="Languages" />

            <div className="sub__container">
                <h2>TOEIC 935</h2>
                <Duration duration="2021.08.29" />
            </div>
            <div className="sub__container">
                <h2>OPIc IH</h2>
                <Duration duration="2023.03.11" />
            </div>

            <Divider />
        </section>
    );
}

export default Languages;
