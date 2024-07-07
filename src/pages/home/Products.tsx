import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CardProduct from "./CardProduct";

const listProduct = [
    {
        fileName: "./cid.png",
        buttonText: "CID",
        pathRedirect :"/bot"
    },
    {
        fileName: "./script.png",
        buttonText: "SCRIPT",
        pathRedirect :"/script"
    },
    {
        fileName: "./service.png",
        buttonText: "SERVICE",
        pathRedirect :"/service"
    },
]

export default function Products() {
    return <div className="flex justify-center mt-10">
        <Card className="w-11/12 p-10">
        <h1 className="text-3xl font-semibold mb-10">List Products</h1>
            <CardContent>
                <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-between align-bottom">
                    {
                        listProduct.map(product => (
                            <CardProduct fileName={product.fileName} buttonText={product.buttonText} />
                        ))
                    }
                </div>
            
            </CardContent>
        </Card>
    </div>
}