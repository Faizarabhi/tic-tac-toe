import axios from 'axios'
interface Props {

}
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const page = async () => {
    await wait(5000)
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log('hello')
    throw new Error('not authed ')
    return (<div>
        {JSON.stringify(data)}
    </div>);
}

export default page;