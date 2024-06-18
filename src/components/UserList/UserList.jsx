import { useGetData } from "../../hooks/useGetData";

export function UserList({ url }) {
    const [users, error] = useGetData(url);

    if(error) {
        console.log('error', error);
        return <div>Something went wrong, please come later</div>
    }

    if(Array.isArray(users) && !users.length) {
        return <div>Loading ...</div>
    }

    if(!users.length) {
        return <div>Something went wrong, please come later</div>
    }

    return <ul>{users.map((user) => {
        const {
            id,
            name,
            username,
        } = user
        return (
            <li key={id}>
                <div>{name}</div>
                <div>{username}</div>
            </li>
        )
    })}</ul>
}
