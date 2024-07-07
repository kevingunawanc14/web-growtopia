import { Button } from "@/components/ui/button"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/router"

export default function CardProduct({fileName, buttonText}: any) {
    const router = useRouter()
    return <div className="flex flex-col justify-center space-y-5">
    <img
        className="w-[200px] h-[200x] rounded-full"
        src={fileName}
        alt=""
        />
        <Button onClick={() => router.push("/bot")}>{buttonText}</Button>
    </div>
}