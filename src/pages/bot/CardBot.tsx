import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Input } from "@/components/ui/input";
import { FormDescription } from "@/components/ui/form";
  

export default function CardBot() {
    return (
        <div className="flex justify-center my-10">
            <Card className="w-1/3 py-10">
                <CardContent className="flex flex-col w-full justify-center">
                        <div className="flex justify-center">
                        <img
                            className="w-[200px] h-[200x] rounded-full"
                            src="./cid.png"
                            alt=""
                        />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Choose Type CID</Label>
                                    <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Type CID" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="LEVEL_1">Level 1</SelectItem>
                                        <SelectItem value="dark">Level 5</SelectItem>
                                        <SelectItem value="system">Level 10</SelectItem>
                                    </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Amount</Label>
                                    <Input />
                                </div>
                            </div>
                            <div>
                                <Card>
                                    <CardHeader>
                                        <h1 className="font-bold text-3xl">Payment Method</h1>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-10">
                                            <div className="mb-2">
                                                <h1 className="text-2xl">World Depo : <b>DEPOHABIB</b></h1>
                                                <h1 className="text-2xl">Bot Depo   : <b>BOTDEPOHABIB</b></h1>
                                            </div>
                                            <h1 className="">Your Balance : 3 WL</h1>
                                        </div>
                                        <div className="space-y-4">
                                            <Label>Set Your GrowId</Label>
                                            <div>
                                                <Input />
                                                <h4 className="text-sm">Your GrowId : Habib</h4>
                                            </div>
                                            <Button>Save Changes</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div >
                                <Button className="w-full">Pay</Button>
                            </div>
                        </div>
                </CardContent>
            </Card>
        </div>
    )
}