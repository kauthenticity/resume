import {TECH_STACKS} from './techStacks';
import type {TWorkExperience} from 'types/workExperience.type';

export const WORK_EXPERIENCES_DATA: TWorkExperience[] = [
    {
        name: '네이버파이낸셜',
        duration: '2023.01 - 2023.03',
        introduce: '팀내 협업 도구 개발',
        role: '프론트엔드 인턴',
        techStacks: [TECH_STACKS.REACT, TECH_STACKS.TYPESCRIPT, TECH_STACKS.STYLED_COMPONENT],
        description: [
            '기획, 디자인, 개발 총괄 1인 프로젝트',
            'Github API를 사용한 협업 도구 개발',
            'Polling을 통한 사용자 경험 개선',
            'If-None-Match와 etag를 활용한 캐싱 및 API 횟수 제한 우회',
            'Github Projects를 통한 개발 일정 관리',
        ],
        outcome: [
            'React의 렌더링 원리를 이해한 상태 관리 역량',
            'async-await과 비동기 함수를 다루는 역량',
            '산발적인 데이터에서 원하는 데이터를 필요한 스키마대로 가공하는 프로그래밍 능력',
            '부수 효과 없는 코드를 통해 가독성을 높이는 방법',
            '협업에서 가독성을 위한 클린 코드 작성법',
        ],
    },
    {
        name: '퀄리소프트',
        duration: '2021.12 - 2022.06',
        introduce: 'Dynamics365 기반 커스텀 CRM 개발',
        role: '프론트엔드 인턴',
        techStacks: [TECH_STACKS.JAVASCRIPT, TECH_STACKS.HTML5, TECH_STACKS.CSS, TECH_STACKS.JQUERY, TECH_STACKS.VUE],
        description: ['고객사의 요구에 맞는 CRM 구축 및 개발', '데모 CRM 구축 과정 간소화', '소스코드 서버 migration'],
        outcome: [
            '형상 관리 및 유지 보수 활성화, 보다 안정적인 서버 확보',
            '데모 CRM 사이트 생성 시간 3시간 → 1시간 단축',
            '소스 코드 저장소 변경에 따른 작업 시간 단축 및 생산성 향상',
            '브라우저에서 스크립트의 defer, async 속성에 따른 로드 방식 이해',
        ],
    },
];
