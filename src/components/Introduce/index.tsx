import Divider from '@lib/Divider';
import Contacts from './Contacts';
import * as Styled from './index.style';

function Introduce() {
    return (
        <section>
            <h1 className="introduce">
                <Styled.TitleSpan>더 나은 사용자 경험을 고민하는</Styled.TitleSpan>
                <br />
                프론트엔드 개발자, 강진실입니다.
            </h1>
            <Styled.Description>
                기술이 바꾸는 라이프스타일에 관심이 많습니다.
                <br />
                유지 보수성과 확장성은 가독성에서 나온다고 믿습니다.
                <br />
                문제 상황에서 타협점을 찾기 보다는 해결책을 찾고자 합니다.
            </Styled.Description>

            <Contacts />

            <Divider />
        </section>
    );
}

export default Introduce;
