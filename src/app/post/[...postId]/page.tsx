export async function generateStaticParams(): Promise<{ postId: string }[]> {
    const posts = ['one', 'two'];

    return posts.map((post) => {
        return {
            postId: post
        };
    });
}
const page = (props:any) => {
    return (<>
    ll
    </>);
}

export default page;