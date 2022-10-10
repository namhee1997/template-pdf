interface Props {
    classNameText?: string; 
    classNameTitle?: string; 
    title: string;
    div: string;
}

const Hoobies = ({ div, classNameTitle='', title, classNameText=''}: Props) => {
    if(!div || !title) return null;
    return(
        <div>
            <h2 className={`font-semibold leading-2.974vw text-2.352vw mb-[1.344vw] uppercase ${classNameTitle}`}>{title}</h2>
            <div className={`leading-2.353vw text-1.345vw font-normal ${classNameText}`} dangerouslySetInnerHTML={{__html: div}} />
        </div>
    );
}

export default Hoobies;