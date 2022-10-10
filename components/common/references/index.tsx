import { format } from 'date-fns';

interface Props {
    classNameTitle?: string; 
    title: string;
    data: Array<Record<string, string | number | undefined>>;
}

const References = ({ classNameTitle='', title, data}: Props) => {
    if(!data || !title) return null;

    return(
        <div>
            <h2 className={`font-semibold leading-2.974vw text-2.352vw mb-[1.344vw] uppercase ${classNameTitle}`}>{title}</h2>
            <ul className='grid grid-cols-2 gap-1.345vw'>
                {
                    data.map(e => {
                        return (
                            <li key={e.id}>
                                <ul>
                                    <li className='text-1.345vw leading-2.352vw font-normal text-[#000]'>{e.contactPerson}</li>
                                    <li className='text-1.345vw leading-2.352vw font-normal text-[#000]'>{e.email}</li>
                                    <li className='text-1.345vw leading-2.352vw font-normal text-[#000]'>{e.companyName}</li>
                                    <li className='text-1.345vw leading-2.352vw font-normal text-[#000]'>{e.phone}</li>
                                </ul>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default References;