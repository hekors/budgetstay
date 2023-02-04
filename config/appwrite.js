import { Client, Database, Account, ID } from "appwrite";

let appwrite = new Client()
  // .setEndpoint(process.env.END_POINT)
  .setEndpoint("http://localhost/v1")
  .setProject("63dd85af938c3212d806");
// .setProject(process.env.PROJECT_ID);

let account = new Account(appwrite);
// let database = new Database(appwrite, process.env.DATABASE_ID);

const api = {
  createAccount: (email, password) => {

  },

  // getAccount: () => {
  //   return api.provider().account.get();
  // },

  // createSession: (email, password) => {
  //   api
  //     .provider()
  //     .account.createEmailSession(email, password)
  //     .then((response) => {
  //       return response;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       return err;
  //     });
  // },

  // deleteCurrentSession: () => {
  //   return api.provider().account.deleteSession("current");
  // },
};

export { api };
