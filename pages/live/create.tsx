import Button from '@/components/button';
import Input from '@/components/input';
import type { NextPage } from 'next';

const Create: NextPage = () => {
    return (
        <div className=" space-y-5 py-10 px-4">
            <Input label="Name" name="name" type="text" />
            <Input
                label="Price"
                name="price"
                type="text"
                placeholder="0.00"
                kind="price"
                required
            />

            <div>
                <label
                    htmlFor="description"
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
                    rows={4}
                />
            </div>
            <Button text="Go live" />
        </div>
    );
};

export default Create;
