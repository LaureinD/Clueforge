type Params = {
    params: {
        slug: string
    }
}

export default async function RoomPage({ params }: Params) {
    return <h1>{params.slug}</h1>
}