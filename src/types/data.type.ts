export type TData = {
    title: string;
    duration: string;
    descriptions: string[];
};

export type TSkill = Omit<TData, 'duration'>;

export type TTechStack = {
    className?: string;
    text: string;
};

export type TSideProject = {
    imagePath: string;
    title: string;
    description: string;
    techStacks: TTechStack[];
    url: string;
};

export type TWorkExperience = TData & {
    introduce: string;
    role: string;
    techStacks: TTechStack[];
    outcome: string[];
};
