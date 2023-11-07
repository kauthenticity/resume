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
            'Github Projects를 통한 개발 일정 관리',
        ],
        outcome: ['함수형 프로그래밍을 통한 산발적 데이터 가공', '협업에서 가독성을 위한 클린 코드 작성법'],
    },
    {
        name: '(주) 퀄리소프트',
        duration: '2021.12 - 2022.06',
        introduce: 'Dynamics365 기반 커스텀 CRM 개발',
        role: '프론트엔드 인턴',
        techStacks: [TECH_STACKS.JAVASCRIPT, TECH_STACKS.HTML5, TECH_STACKS.CSS, TECH_STACKS.JQUERY, TECH_STACKS.VUE],
        description: ['고객사의 요구에 맞는 CRM 구축 및 개발', '데모 CRM 구축 과정 간소화', '소스코드 서버 migration'],
        outcome: [
            '형상 관리 및 유지 보수 활성화, 보다 안정적인 서버 확보',
            '데모 CRM 사이트 생성 시간 단축',
            '소스 코드 저장소 변경에 따른 작업 시간 단축 및 생산성 향상',
        ],
    },
];
