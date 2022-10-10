import { memo, ReactNode } from "react";

interface Props{
    layoutLeft: ReactNode;
    layoutRight: ReactNode;
}
const LayoutPDF = ({layoutLeft, layoutRight}: Props) => {

    return(
        <div className="flex justify-center h-[100%]">
            <div className="w-[35.294vw] p-[6.723vw] bg-[#004E7D]">{layoutLeft}</div>
            <div className="w-[calc(100%-35.294vw)] p-[6.723vw] bg-[#fff]">{layoutRight}</div>
        </div>
    );
}

export default memo<Props>(LayoutPDF);