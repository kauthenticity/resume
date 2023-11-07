import type {TSkill} from 'types/Skills.type';

export const SKILLS_DATA: TSkill[] = [
    {
        name: 'React',
        descriptions: [
            'React의 렌더링 과정을 이해하고 상태 관리를 할 수 있습니다.',
            '상태의 불변성을 유지하여 부수효과를 억제하고 가독성을 높입니다.',
            '재사용성과 확장성을 추구합니다.',
        ],
    },
    {
        name: 'React Native',
        descriptions: [
            '코어 컴포넌트와 애니메이션을 사용해서 쉽게 UI를 구현할 수 있습니다.',
            '모바일 환경을 고려한 navigation 구조를 설계할 수 있습니다.',
        ],
    },
    {
        name: 'Javascript/Typescript',
        descriptions: [
            '실행 컨텍스트, 프로토타입, 클로저와 같은 Javascript의 핵심을 이해하고 있습니다.',
            '타입 추론 및 타입 가드를 통해 빠르게 코드를 작성하고 런타임 오류를 방지할 수 있습니다.',
            '확장성을 고려하여 타입을 설계할 수 있습니다.',
        ],
    },
];
