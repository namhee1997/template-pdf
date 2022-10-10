import Image from "next/image";

interface Props {
    classNameTotal?: string;
    thumbUrl: Record<string, string | any | undefined> | null;
}

const Avatar = ({classNameTotal = '', thumbUrl}: Props) => {
    if(Object.keys(thumbUrl as object).length === 0 || !thumbUrl) return null;
    return(
        <div className={`${classNameTotal} postion-unset`}>
            <Image layout="fill" alt="" src={thumbUrl?.thumbUrl || ''} />
        </div>
    );
}

export default Avatar;