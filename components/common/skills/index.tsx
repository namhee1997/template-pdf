interface Props {
    classNameTotal: string;
    skills: Array<Record<string, string | number | undefined>>;
    classNameText?: string; 
    classNameTitle?: string; 
    title: string;
}

const Skills = ({classNameTotal, skills, classNameText='', classNameTitle='', title}: Props) => {
    if(skills.length === 0) return null;
    return(
        <div>
            <h2 className={`font-semibold leading-2.974vw text-2.352vw mb-[1.344vw] uppercase ${classNameTitle}`}>{title}</h2>
            <ul className={`flex flex-col gap-[1.344vw] ${classNameTotal}`}>
                {
                    skills.map((e, i) => {
                        let levelSkill = 'w-[0%]';
                        
                        switch (e.level) {
                            case 'novice':
                            case 'beginner':
                                 levelSkill = 'w-[0%]';
                                 break;
                            case 'intermediate':
                            case 'beginner':
                                 levelSkill = 'w-[25%]';
                                 break;
                            case 'skillful':
                            case 'proficient':
                                 levelSkill = 'w-[50%]';
                                break;
                            case 'experienced': 
                            case 'fluent':
                                 levelSkill = 'w-[75%]';
                                 break;
                            case 'expert':
                            case 'native':
                                 levelSkill = 'w-[100%]';
                                 break;
                            default:                                
                                 levelSkill = 'w-[0%]';
                                 break;
                        }                        

                        return(
                            <li key={i}>
                                <span className={`flex flex-col leading-1.638vw text-1.345vw font-medium mb-[0.672vw] ${classNameText}`}>{e.skill || e.language}</span>
                                <span className={`w-[100%] h-[0.672vw] block relative bg-[#ffffff52]`}><span className={`absolute h-[100%] bg-[#fff] left-0 top-0 ${levelSkill}`}></span></span>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Skills;