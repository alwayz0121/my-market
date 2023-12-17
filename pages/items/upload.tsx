import type { NextPage } from 'next';

const Upload: NextPage = () => {
    return (
        <div className="px-4 space-y-5 py-10">
            <div>
                {/* label에 넣고 숨기면 input을 클릭하는 것과 같은 효과 */}
                <label className="w-full cursor-pointer text-gray-600 hover:text-orange-500 hover:border-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
                    <svg
                        className="h-12 w-12"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <input type="file" className="hidden" />
                </label>
            </div>
            <div>
                <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="price"
                >
                    Price
                </label>
                <div className="rounded-md relative shadow-sm flex items-center">
                    <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
                        <span className="text-gray-500 text-sm">$</span>
                    </div>
                    <input
                        id="price"
                        className="appearance-none pl-7 w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        type="text"
                        placeholder="0.00"
                    />
                    <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">USD</span>
                    </div>
                </div>
            </div>
            <div>
                <label
                    htmlFor="description"
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
                    rows={4}
                />
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
                Upload item
            </button>
        </div>
    );
};

export default Upload;