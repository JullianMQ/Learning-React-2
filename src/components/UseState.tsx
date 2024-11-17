import Button from './Button'

type UseStateProps = {
    count: number
    handleAdd: () => void
    handleSubtract: () => void
}

const UseState = ({ count, handleAdd, handleSubtract}: UseStateProps) => {
    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold">UseState {count}</h1>
            <div className="flex gap-6">
                <Button onClick={handleAdd}
                    name="Add Count"
                />
                <Button onClick={handleSubtract}
                    name="Sub Count"
                    color="red"
                    borderColor="red"
                />
            </div>
        </div>
    )
}

export default UseState
