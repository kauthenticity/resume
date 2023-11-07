import * as Styled from './index.style';

function Contacts() {
    return (
        <>
            <Styled.Title>Contacts</Styled.Title>
            <ul>
                <Styled.ListItem>
                    <Styled.LabelWrapper>Github</Styled.LabelWrapper>
                    <a href="https://github.com/kauthenticity">github.com/kauthenticity</a>
                </Styled.ListItem>

                <Styled.ListItem>
                    <Styled.LabelWrapper>Email</Styled.LabelWrapper>
                    kauthenticity@gmail.com
                </Styled.ListItem>

                <Styled.ListItem>
                    <Styled.LabelWrapper>Mobile</Styled.LabelWrapper>
                    010-2229-7345
                </Styled.ListItem>
            </ul>
        </>
    );
}

export default Contacts;
