import Button from './Button'

type UseStateProps = {
    count: number
    handleAdd: () => void
    handleSubtract: () => void
}

const UseState = ({ count, handleAdd, handleSubtract}: UseStateProps) => {
    return (
        <div className="">
            <h1 className="text-xl font-semibold hover:text-sky-800">UseState {count}</h1>
            <div className="flex gap-6">
                <Button onClick={handleAdd}
                    name="Add Count"
                />
                <Button onClick={handleSubtract}
                    name="Sub Count"
                    color="red"
                />
            </div>
        </div>
    )
}

export default UseState
