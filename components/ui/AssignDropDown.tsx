'use client'
import { User } from "@prisma/client"
import { useEffect, useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu"


const AssignDropDown = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:3000/api/users')
            const data = await res.json()
            setUsers(data)
        }
        fetchData()
    }, []);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Assign Bug to</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {users.map(user => {
                    return <DropdownMenuItem className="cursor-pointer" key={user.id}>{user.name}</DropdownMenuItem>
                })}
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default AssignDropDown