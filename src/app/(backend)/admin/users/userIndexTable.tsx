import Icon from "@/components/icon";
import {getUsers} from "@/database/services/userService";

export default async function UserIndexTable() {
    const users = await getUsers();

    return (
        <table className={"relative w-full"}>
            <thead className={"sticky top-0 bg-surface shadow-bottom text-left"}>
            <tr>
                <th className={"pl-6 pt-6 pb-4"}>id</th>
                <th className={"pt-6 pb-4"}>Email</th>
                <th className={"pt-6 pb-4"}>First name</th>
                <th className={"pt-6 pb-4"}>Last name</th>
                <th className={"pt-6 pb-4"}>Verified</th>
                <th className={"pt-6 pb-4"}>Last login</th>
                <th className={"pr-6 pt-6 pb-4"}>Created at</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                    <tr key={user.id}
                        className={((index + 1) % 2 === 1 ? 'bg-surface ' : 'bg-background ') + 'px-6'}>
                        <td className={"pl-6 py-3"}>{user.id}</td>
                        <td className={"py-3"}>{user.email}</td>
                        <td className={"py-3"}>{user.first_name}</td>
                        <td className={"py-3"}>{user.last_name}</td>
                        <td className={"py-3"}>
                            <div className={"size-5"}>
                                {user.email_verified_at
                                    ? <Icon name={"check"} className={"text-success"}/>
                                    : <Icon name={"x"} className={"text-danger"}/>
                                }
                            </div>
                        </td>
                        <td className={"py-3"}>{user.last_login
                            ? user.last_login.toLocaleDateString('nl-BE')
                            : '-'
                        }
                        </td>
                        <td className={"pr-6 py-3"}>{user.created_at
                            ? user.created_at.toLocaleDateString('nl-BE')
                            : '-'
                        }
                        </td>
                    </tr>
                )
            )
            }
            </tbody>
        </table>
    )
}