import Item from '@/components/item';
import type { NextPage } from 'next';

const Bought: NextPage = () => {
    return (
        <div className="flex flex-col space-y-5 py-10">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                <Item
                    key={i}
                    id={i}
                    title="new Iphone"
                    comments="Try this"
                    hearts={i + 10}
                    price={99}
                />
            ))}
        </div>
    );
};

export default Bought;
