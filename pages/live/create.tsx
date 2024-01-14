import Button from '@/components/button';
import Input from '@/components/input';
import Layout from '@/components/layout';
import Textarea from '@/components/textarea';
import type { NextPage } from 'next';

const Create: NextPage = () => {
    return (
        <Layout canGoBack title="Go Live">
            <form className=" p-4 space-y-4">
                <Input label="Name" name="name" type="text" />
                <Input
                    label="Price"
                    name="price"
                    type="text"
                    placeholder="0.00"
                    kind="price"
                    required
                />

                <Textarea name="description" label="Description" />
                <Button text="Go live" />
            </form>
        </Layout>
    );
};

export default Create;
