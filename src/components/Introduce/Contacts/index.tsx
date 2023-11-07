import {MdOutlineEmail} from 'react-icons/md';
import {SiGithub} from 'react-icons/si';
import * as Styled from './index.style';

function Contacts() {
    return (
        <>
            <Styled.Title>Contacts</Styled.Title>
            <Styled.List>
                <li>
                    <SiGithub />
                    <a href="https://github.com/kauthenticity" target="_blank">
                        kauthenticity
                    </a>
                </li>

                <li>
                    <MdOutlineEmail />
                    kauthenticity@gmail.com
                </li>
            </Styled.List>
        </>
    );
}

export default Contacts;
