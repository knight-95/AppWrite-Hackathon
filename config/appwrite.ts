import { Client, Databases, Account } from "node-appwrite";

const createAdminClient = async () => {
     const client = new Client()
          .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
          .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
          .setKey(process.env.NEXT_APPWRITE_KEY);

     return {
          get account() {
               return new Account(client);
          },
          get databases() {
               return new Databases(client);
          },
     };
};

const createSessionClient = async (session: string) => {
     console.log(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT);
     console.log(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

     const client = new Client()
          .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
          .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

     if (session) {
          client.setSession(session);
     }

     return {
          get account() {
               return new Account(client);
          },
          get databases() {
               return new Databases(client);
          },
     };
};

export { createAdminClient, createSessionClient };