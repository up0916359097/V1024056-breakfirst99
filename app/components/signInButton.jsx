import { signInAction } from "../actions/myAuth";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

export default async function signInAction({provider, btnText,btnCss}){
    return (
        <form action={signInAction} >
            <Button
                type="submit"
                name="provider"
                value={provider}
                className={btnCss}>
                    <div>
                        <Image
                        src={`${provider}.png`}
                        alt={`${provider} logo`}
                        width={48}
                        height={48}
                        className="w-8 h-8 p-2 inline-block bg-slate-300/50"
                        />
                        {btnText}
                    </div>
                </Button>
        </form>
    );
}