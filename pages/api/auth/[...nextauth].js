import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../utils/models/user.model";
import "../../../utils/config/db";
const bcrypt = require("bcrypt");



export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        const { email, password } = credentials;

        const check = await User.findOne({ email: email });

        if (check) {
          const result = await bcrypt.compare(password, check.password);

          if (result) {
            const payload = {
              email: check.email,
              id: check._id,
              name: check.name,
            };

            return payload;
          } else {
            throw new Error("Invalid credential !");
          }
        } else {
          throw new Error("User not found !");
        }
      },
    }),
  ],
  secret: "qRoV2W+S/8OjgnnZeGNNf0pzj2d/2LAmWVJZKzBoc2o=",
};

export default NextAuth(authOptions);
