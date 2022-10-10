import { memo } from "react";
import { PropsDataResume } from "../../../../model/propsType";
import Educations from "../../../common/education";
import Experiences from "../../../common/experiences";
import Hoobies from "../../../common/hobbies";
import References from "../../../common/references";

interface Props{
    data: PropsDataResume;
}
const LayoutRight = (data: Props) => {    
    if(Object.keys(data.data).length === 0) return null;
    
    const {
        profile,
        educations,
        workExperiences,
        customSections,
        certifications,
        references,
        visibleReferences,
    } = data.data as PropsDataResume;
    
    return (
       <>
        <div className="mb-[4.033vw]">
            <Hoobies
                classNameTitle={`text-black`}
                title='profile'
                div={profile || ''}
            />
        </div>
        <div className="mb-[4.033vw]">
            <Experiences
                title='Experience'
                data={workExperiences || []}
            />
        </div>
        <div className="mb-[4.033vw]">
            <Educations
                title='Education'
                data={educations || []}
            />
        </div>
        <div className="mb-[4.033vw]">
            <Educations
                title='CERTIFICATIONS'
                data={certifications || []}
            />
        </div>
        {
            visibleReferences &&
            <div>
                <References
                    title='REFERENCES'
                    data={references || []}
                />
            </div>
        }
       </>
    );
}

export default memo<Props>(LayoutRight);