'use client'


const error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return <div className="bg-blue-200">error {error.message}<button className="bg-red-500" onClick={() => reset}>Try again</button></div>
}
export default error