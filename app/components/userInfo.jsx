import { auth } from "@/auth";
import Image from "next/image";

<<<<<<< HEAD

export default async function UseInfo(){
    const session = await auth();

    if( !session.user ) return null;

    return (
        <div className="flex flex-row items-center my-4 p-4 space-x-4">
           <Image
           src={session.user.image}
           alt="User Avatar"
           width={128}
           height={128}
           />
           <ul className="w-48 h-32 flex flex-col justify-center
           items-start rounded-md shadow-lg bg-slate-700 text-white p-2">
            <li className="font-bold text-2xl">{session.user.name}</li>
            <li>{session.user.email}</li>
           </ul>
        </div>
    )
=======
export default async function UserInfo() {
    const session = await auth();

    if (!session.user) return null;

    return (
        <div className="flex flex-row items-center my-4 p-4 space-x-4">
            <Image
                src={session.user.image}
                alt="User Avatar"
                width={128}
                height={128}
            />
            <ul className="w-48 h-32 flex flex-col justify-center
             items-center rounded-md shadow-lg bg-slate-700 text-white p-2">
                <li className="font-bold text-2xl">{session.user.name}</li>
                <li>{session.user.email}</li>
            </ul>
        </div>
    );
>>>>>>> ce541ea (123)
}