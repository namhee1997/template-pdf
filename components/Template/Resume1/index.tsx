import { PropsDataResume } from "../../../model/propsType";
import LayoutPDF from "../../Layout/LayoutPDF";
import LayoutRight from "./LayoutRight";
import LayoutLeft from "./LayoutLeft";
import _ from 'lodash';
import { useMemo } from "react";
import { Head } from "next/document";

interface Props{
    data: PropsDataResume;
}
const Resume1 = (data: Props) => {    
    if(_.isEmpty(data)) return <>Error not data</>;
    const {
        color,
        locale,
        personalDetails,
        position,
        sectionsOrder,
        customSections,
        sectionTitles,
        visibleAvatar,
        avatar,
        spacing,
        visibleReferences,
        hideSkillLevel,
        isCreativeStyle,
        opacityProfile,
        opacityPosition,
        opacityPersonalDetails,
        opacitySkills,
        opacityLanguages,
        opacityWorkExperiences,
        opacityEducations,
        email,
        hobbies,
        listColors,
        profile,
        rootTemplate,
        skills,
        step,
        template,
        title,
        educations,
        languages,
        workExperiences,
        certifications,
        references,
        
    } = data.data as PropsDataResume;

    const dataLeft = useMemo(() => ({
        personalDetails,
        position,
        email,
        avatar,
        visibleAvatar,
        skills,
        hobbies,
        languages,
        hideSkillLevel,
    }),[
        personalDetails, 
        position, 
        email, 
        avatar, 
        visibleAvatar, 
        skills, 
        hobbies, 
        languages, 
        hideSkillLevel
    ])

    const dataRight = useMemo(()=>({
        profile,
        educations,
        workExperiences,
        customSections,//sss
        certifications,
        references,
        visibleReferences,
    }),[profile, educations, workExperiences, customSections, certifications, references, visibleReferences])

    return (
        <div className="w-[100%] h-[100%]"
        //  style={{'backgroundImage': 'url(/123.png)'}}
        >
            <style jsx>{`
            * { 
            font-family: 'Montserrat';
            }
            `}</style>
            <LayoutPDF
                layoutLeft={<LayoutLeft data={dataLeft} />}
                layoutRight={<LayoutRight data={dataRight} />}
            />
        </div>
    );
}

export default Resume1;