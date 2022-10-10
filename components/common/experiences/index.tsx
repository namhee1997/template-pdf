import { format } from 'date-fns';

interface Props {
    classNameTitle?: string; 
    title: string;
    data: Array<Record<string, string | number | boolean | undefined>>;
}

const Experiences = ({ classNameTitle='', title, data}: Props) => {
    if(!data || !title) return null;

    return(
        <div>
            <h2 className={`font-semibold leading-2.974vw text-2.352vw mb-[1.344vw] uppercase ${classNameTitle}`}>{title}</h2>
            <ul className='flex flex-col gap-0.672vw'>
                {
                    data.map(e => {
                        const dateFrom = format(new Date(e.dateFrom as string || ''), 'MMM YYY')
                        const checkDateTo = () => {
                            const dateTo = format(new Date(e.dateUntil as string || ''), 'MMM YYY');
                            const date = format(new Date(), 'MMM YYY');
                            if(dateTo === date) return 'Present';
                            return dateTo;
                        }
                        const dateTo = checkDateTo();
                        
                        return (
                            <li key={e.id as string}>
                                <div className="text-1.345vw leading-2.352vw font-medium">{e.title} <span>|</span> {e.employer}, {e.city}</div>
                                <div className="text-1.345vw leading-2.352vw font-medium text-[#000000a3]">{`${dateFrom} - ${dateTo}`}</div>
                                <div className='li_icons'>
                                    <div className='text-1.345vw leading-2.352vw font-normal' dangerouslySetInnerHTML={{__html: e.description as string || ''}} />
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Experiences;