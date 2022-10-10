import { format } from 'date-fns';

interface Props {
    classNameTitle?: string; 
    title: string;
    data: Array<Record<string, string | number | undefined>>;
}

const Educations = ({ classNameTitle='', title, data}: Props) => {
    if(!data || !title) return null;

    return(
        <div>
            <h2 className={`font-semibold leading-2.974vw text-2.352vw mb-[1.344vw] uppercase ${classNameTitle}`}>{title}</h2>
            <ul className='flex flex-col gap-0.672vw'>
                {
                    data.map(e => {
                        const dateFrom = format(new Date(e.dateFrom || ''), 'YYY')
                        const dateTo = format(new Date(e.dateUntil || ''), 'YYY');
                        
                        return (
                            <li key={e.id}>
                                <div className="text-1.345vw leading-2.352vw font-medium">{e.degree} <span>|</span> {e.school}, {e.city}</div>
                                <div className="text-1.345vw leading-2.352vw font-medium text-[#000000a3]">{`${dateFrom} - ${dateTo}`}</div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Educations;