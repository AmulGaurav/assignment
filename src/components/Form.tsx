// "use client";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// const formSchema = z.object({
//   email: z.string().email("Invalid email"),
//   password: z.string().min(5, "Password should be 5 characters"),
// });

// export default function FormComponent() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = (data: any) => console.log(data);

//   return (
//     <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("email")} placeholder="email" />
//       {errors.email && <span>{errors.email.message}</span>}
//       <input {...register("password")} placeholder="password" type="password" />
//       {errors.password && <span>{errors.password.message}</span>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
