import Button from '@/components/button';
import Layout from '@/components/layout';
import Textarea from '@/components/textarea';
import type { NextPage } from 'next';

const Write: NextPage = () => {
    return (
        <Layout canGoBack title="Write Post">
            <form className="p-4 space-y-10">
                <Textarea required placeholder="Ask a question!" />
                <Button text="Submit" />
            </form>
        </Layout>
    );
};

export default Write;
