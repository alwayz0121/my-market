import Item from '@/components/item';
import type { NextPage } from 'next';

const Sold: NextPage = () => {
    return (
        <div className="flex flex-col space-y-5 py-10">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                <Item
                    key={i}
                    id={i}
                    title={`i Phone ${i + 1}`}
                    price={99}
                    comments={'hello This is new one!'}
                    hearts={i + 10}
                />
            ))}
        </div>
    );
};

export default Sold;
