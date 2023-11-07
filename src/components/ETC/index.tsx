import {ETC_DATA} from '@constants/etc';
import {Duration} from '@lib/Duration';
import List from '@lib/List';
import Title from '@lib/Title';

function Etc() {
    return (
        <section>
            <Title text="ETC." />
            {ETC_DATA.map(({title, duration, descriptions}, index) => (
                <div className="sub__container" key={index}>
                    <h2>{title}</h2>
                    <Duration duration={duration} />

                    <List items={descriptions} mt="0.7rem" />
                </div>
            ))}
        </section>
    );
}

export default Etc;
