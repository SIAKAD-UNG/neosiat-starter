export type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: "relationship" | "complicated" | "single"
    subRows?: Person[]
}

const range = (len: number) => {
    const arr: number[] = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const newPerson = (): Person => {
    return {
        firstName: "John",
        lastName: "Rambo",
        age: 20,
        visits: 1000,
        progress: 200,
        status: "relationship", // relationship, complicated, single,
    }
}

export function makeData(...lens: number[]) {
    const makeDataLevel = (depth = 0): Person[] => {
        const len = lens[depth]!
        return range(len).map((d): Person => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}