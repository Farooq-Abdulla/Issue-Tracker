'use client'

import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select";



const AssignBox = () => {
    const { data: users, isLoading, isError, error, } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/api/users')
            const data = await res.json()
            return data
        },
        staleTime: 60 * 1000,
        retry: 3,
    })
    // const [users, setUsers] = useState<User[]>([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch('http://localhost:3000/api/users')
    //         const data = await res.json()
    //         setUsers(data)
    //     }
    //     fetchData()
    // }, []);
    return (
        <div className="rounded-lg">
            <Select >
                <SelectTrigger className="">
                    <SelectValue placeholder="Assign..." />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Users</SelectLabel>
                        {users?.map(user => {
                            return <SelectItem className="cursor-pointer" value={user.id} key={user.id}>{user.name}</SelectItem>
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default AssignBox