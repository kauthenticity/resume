import {EDUCATIONS_DATA} from '@constants/educations';
import Divider from '@lib/Divider';
import {Duration} from '@lib/Duration';
import Paragraph from '@lib/Paragraph';
import Title from '@lib/Title';

function Educations() {
    return (
        <section>
            <Title text="Educations" />
            <div className="sub__container">
                <h2>{EDUCATIONS_DATA.title}</h2>
                <Duration duration={EDUCATIONS_DATA.duration} />

                <Paragraph lines={EDUCATIONS_DATA.descriptions} />
            </div>

            <Divider />
        </section>
    );
}

export default Educations;
