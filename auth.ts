// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { NextResponse } from "next/server";
// import { responseFormatter } from "@/utils/responseFormatter";


// export const {
//   handler:{GET,POST},
//   signIn,
//   signOut,
//   auth,
// } = NextAuth({
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: "Credentials",
//       credentials: {
//         email: { label: "email", type: "email", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials): Promise<any> {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Please provide both email and password");
//         }

//         try {
//           // Call the external login API
//           const response = await fetch(
//             `${process.env.NEXTAUTH_URL}/api/auth/login`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 email: credentials.email,
//                 password: credentials.password,
//               }),
//             }
//           );

//           const data = await response.json();

//           if (!response.ok) {
//             throw new Error(data.message || "Invalid credentials");
//           }

//           // Return user data for session
//           const user = data.data;
//           return {
//             id: user.id,
//             name: user.name,
//             email: user.email,
//           };
//         } catch (error) {
//           if (error instanceof Error) {
//             return NextResponse.json(
//               responseFormatter(
//                 500,
//                 "error logging the user",
//                 error.message,
//                 null
//               )
//             );
//           }
//           return NextResponse.json(
//             responseFormatter(500, "Error Occured", null, null)
//           );
//         }
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: { strategy: "jwt" },
// });
