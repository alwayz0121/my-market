import Input from '@/components/input';
import type { NextPage } from 'next';

const EditProfile: NextPage = () => {
    return (
        <div className="py-10 px-4 space-y-4">
            <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-full bg-slate-500" />
                <label
                    htmlFor="picture"
                    className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
                >
                    Change
                    <input
                        id="picture"
                        type="file"
                        className="hidden"
                        accept="image/*"
                    />
                </label>
            </div>

            <Input label="Email address" name="email" type="email" required />
            <Input
                label="Phone number"
                name="phone"
                type="number"
                required
                kind="phone"
            />

            <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
                Update profile
            </button>
        </div>
    );
};

export default EditProfile;
