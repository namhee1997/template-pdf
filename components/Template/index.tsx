import { PropsDataResume } from "../../model/propsType";
import Resume1 from "./Resume1";

interface PropsTemplate {
    template: string;
    data: PropsDataResume
}

const Template = ({template, data}: PropsTemplate) => {
    
    switch (template) {
        case 'resume1':
            return <Resume1 data={data} />;
    
        default:
            return <></>;
    }
}

export default Template;