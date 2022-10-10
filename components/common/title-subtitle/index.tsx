interface Props {
    spacing: string;
    title: string | undefined;
    subTitle: string | undefined;
    classNameTitle?: string;
    classNameSubTitle?: string;
}

const TitleSubTitle = ({spacing, title='', subTitle='', classNameTitle = '', classNameSubTitle = ''}: Props) => {

    return(
        <div className={`flex flex-col text-white ${spacing}`}>
            <h1 className={`leading-3.687vw uppercase font-semibold	 ${classNameTitle}`}>{title}</h1>
            <h3 className={`leading-2.049vw font-normal	 ${classNameSubTitle}`}>{subTitle}</h3>
        </div>
    );
}

export default TitleSubTitle;