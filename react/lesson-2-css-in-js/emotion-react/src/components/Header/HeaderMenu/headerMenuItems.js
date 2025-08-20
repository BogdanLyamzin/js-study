import { nanoid } from "nanoid"

export default [
    {
        id: nanoid(),
        href: "/vehicles",
        text: "Vehicles",
        active: true,
    },
    {
        id: nanoid(),
        href: "/users",
        text: "Users"
    },
    {
        id: nanoid(),
        href: "/add-vehicle",
        text: "Add vehicle"
    },
    {
        id: nanoid(),
        href: "/auction",
        text: "Auction"
    },
]