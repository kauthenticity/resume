import type {TTechStack} from './SideProjectCard.type';

export type TWorkExperience = {
    name: string;
    duration: string;
    introduce: string;
    role: string;
    techStacks: TTechStack[];
    description: string[];
    outcome: string[];
};
