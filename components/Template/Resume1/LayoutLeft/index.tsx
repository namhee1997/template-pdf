import { memo } from "react";
import { PropsDataResume } from "../../../../model/propsType";
import Avatar from "../../../common/avatar";
import Contact from "../../../common/contact";
import Hoobies from "../../../common/hobbies";
import Skills from "../../../common/skills";
import TitleSubTitle from "../../../common/title-subtitle";

interface Props{
    data: PropsDataResume;
}
const LayoutLeft = (data: Props) => {    
    if(Object.keys(data.data).length === 0) return null;
    const {
        personalDetails,
        position,
        email,
        avatar,
        visibleAvatar,
        skills,
        hobbies,
        languages,
        hideSkillLevel,
    } = data.data as PropsDataResume;

    const listIcons = [
        {
            icon: 'E',
            text: email,
        },
        {
            icon: 'P',
            text: personalDetails?.phoneNumber,
        },
        {
            icon: 'W',
            text: personalDetails?.website,
        },
        {
            icon: 'L',
            text: personalDetails?.linkedIn,
        },
        {
            icon: 'A',
            text: personalDetails?.address,
        },
    ];
    
    
    return (
        <div>
            {
                visibleAvatar &&
                <div className="mb-[4.033vw]">
                    <Avatar 
                        thumbUrl={avatar || {}}
                    />
                </div>
            }
            <div className="mb-[4.033vw]">
                <TitleSubTitle
                    spacing={`gap-0.672vw`}
                    title={`${personalDetails?.firstName} ${personalDetails?.lastName}`}
                    subTitle={position}
                    classNameTitle={` text-3.025vw`}
                    classNameSubTitle={`text-1.681vw `}
                />
            </div>
            <div className="mb-[4.033vw]"> 
                <Contact
                    listIcons={listIcons}
                    classNameTotal={` text-1.681vw`}
                    classNameIcon={`min-w-[2vw] mr-[5px] `}
                    classNameText={`break-all `}
                />
            </div>
            {
                hideSkillLevel && 
                <div className="mb-[4.033vw]">
                    <Skills 
                        skills={skills || []}
                        classNameTotal={` text-1.681vw `}
                        classNameText={`break-all text-white`}
                        classNameTitle={`text-white`}
                        title='skills'
                    />
                </div>
            }
            <div className="mb-[4.033vw]">
                <Skills 
                    skills={languages || []}
                    classNameTotal={` text-1.681vw `}
                    classNameText={`break-all text-white`}
                    classNameTitle={`text-white`}
                    title='LANGUAGES'
                />
            </div>
            <div>
                <Hoobies 
                    classNameTitle={`text-white`}
                    classNameText={`text-white`}
                    title='Hoobies'
                    div={hobbies || ''}
                />
            </div>
            
        </div>
    );
}

export default memo<Props>(LayoutLeft);