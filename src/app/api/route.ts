type Data = {
    id: string
    name: string,
    no_hp: string | null
}

const data: Array<Data> = [
    {
        id: "1",
        name: "Rukhin",
        no_hp: null,
    },
    {
        id: "2",
        name: "Rambo",
        no_hp: "082187617384",
    },
    {
        id: "3",
        name: "Mustofa",
        no_hp: null,
    },
]

export function GET() {
    return Response.json({ data })
}
