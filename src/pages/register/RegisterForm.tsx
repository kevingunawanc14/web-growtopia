
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
 
const FormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters"
	}),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
	email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
})
 
export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
			name:"",
      email: "",
      password: ""
    },
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
 
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="text-left w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                  <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
              </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                  <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
              </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormDescription>
              Dont have an account? Sign Up 
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </CardContent>

    </Card>
    
  )
}