interface Props {
    classNameTotal?: string;
    listIcons: Array<Record<string, string | undefined>>;
    classNameIcon?: string; 
    classNameText?: string; 
}

const Contact = ({classNameTotal='', listIcons, classNameIcon='', classNameText=''}: Props) => {
    if(listIcons.length === 0) return null;

    return(
        <div>
            <ul className={`flex flex-col gap-[0.672vw] text-white ${classNameTotal}`}>
                {
                    listIcons.map((e, i) => 
                        <li className="flex" key={i}><span className={`flex font-medium leading-2.352vw ${classNameIcon}`}>{e.icon}:</span><span className={`font-normal leading-2.352vw ${classNameText}`}>{e.text}</span></li>
                    )
                }
            </ul>
        </div>
    );
}

export default Contact;