import axios from 'axios'
interface pageProps {

}
export const revalidate =  10
const page = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

    return (<>{JSON.stringify(data)}</>);
}

export default page;