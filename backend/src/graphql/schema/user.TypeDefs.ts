import { GraphQLJSON } from "graphql-type-json";

export const userTypeDef = `#graphql
  scalar JSON

  type User {
    id: ID!
    name: String!
    password: String!
    isStudent: Boolean!
    userType: String!
    validEmail: Boolean
    email: String!
    createdAt: String  # Using DateTime instead of Date
    guardianContactNo: String
    otp: String
  }

  # Query Definitions
  type Query {
    authUser: User
    user(userId: ID!): User
    test(message: JSON): String
  }
`;

