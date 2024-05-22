import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
//import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        let db = (await connectDB).db("market");
        let me = await db
          .collection("user_cred")
          .findOne({ email: credentials?.email });
        //console.log(user);
        //console.log(credentials);
        //입력한게 db에 있는거랑 같으면 db에 있는걸로 리턴해라
        // if (credentials?.email === me?.email) {
        //   return me?.email;
        // } else {
        //   return null;
        // }
        //비밀번호도 체크하는부분 구현해야함!!!!!
        //email이랑 비번 같으면  return me?.email;, 둘중 하나 같지 않으면 return null;
        if (
          credentials?.email === me?.email &&
          credentials?.password === me?.password
        ) {
          return me?.email;
        } else {
          credentials?.email !== me?.email ||
            credentials?.password !== me?.password;
        }
        return null;
      },
    }),
  ],

  callbacks: {
    jwt: async ({
      token,
      user,
      account,
    }: {
      token: any;
      user: any;
      account: any;
    }) => {
      if (user) {
        //aaa로 로그인할경우를 말하는거같은디....
        // token = {};
        //token.e = user;
        // console.log(user);
        if (account.provider === "google") {
          // console.log("ddddd");
          //console.log(account);
          // return token;
        } else {
          token = {};
          token.email = user;
          token.name = user;
          // token.user.name = user;
          // console.log("ffff");
        }
      }
      return token;
    },
    //session은 oauth로그인때 쓰인다.
    session: async ({ session, token }: { session: any; token: any }) => {
      //세션데이터에 토큰데이터 넣어주는거다.
      // session.user = token;
      // console.log(session);
      if (token) {
        session.user = token;
        //console.log(session);
        //console.log(token);
      }

      return session;
    },
  },
  session: {
    strategy: "jwt", //jwt를 사용하여 세션을 관리한다는 의미
    maxAge: 30 * 24 * 60 * 60, //30일
  },
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(connectDB) as any,
};

export default NextAuth(authOptions);
