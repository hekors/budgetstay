import { Client, Databases, Account, ID } from "appwrite";

// // const appwrite = new Client()
// //   // .setEndpoint(process.env.END_POINT)
// //   .setEndpoint("http://localhost/v1")
// //   .setProject("63dd85af938c3212d806");
// // // .setProject(process.env.PROJECT_ID);

// export const register = async (email, password) => {
//   try {
//     const account = new Account(client);
//     return account.create("unique()", email, password);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// const api = {
//   sdk: null,
//   provider: () => {
//     let appwrite = new Client();
//     appwrite
//       .setEndpoint("http://localhost/v1")
//       .setProject("63dd85af938c3212d806");
//     const account = new Account(appwrite);
//     const database = new Databases(appwrite, "63dd8a1d6f634ab0ed1b");

//     api.sdk = { database, account };
//     return appwrite;
//   },
//   createAccount: (email, password) => {
//     api
//       .provider()
//       .account.create(ID.unique(), email, password)
//       .then((response) => {
//         return response;
//       })
//       .catch((err) => {
//         console.error(err);
//         return err;
//       });
//   },

//   getAccount: () => {
//     api
//       .provider()
//       .account.get()
//       .then((response) => {
//         return response;
//       })
//       .catch((err) => {
//         console.error(err);
//         return err;
//       });
//   },

//   createSession: (email, password) => {
//     api
//       .provider()
//       .account.createEmailSession(email, password)
//       .then((response) => {
//         return response;
//       })
//       .catch((err) => {
//         console.error(err);
//         return err;
//       });
//   },

//   deleteCurrentSession: () => {
//     api
//       .provider()
//       .account.deleteSession("current")
//       .then((response) => {
//         return response;
//       })
//       .catch((err) => {
//         console.error(err);
//         return err;
//       });
//   },
// };

// export { api };

const client = new Client()
  // .setEndpoint(process.env.END_POINT)
  .setEndpoint("http://localhost/v1")
  .setProject("63dd85af938c3212d806");
// .setProject(process.env.PROJECT_ID);

export const getUserData = async () => {
  try {
    const account = new Account(client);
    return account.get();
  } catch (error) {
    throw new Error(error);
  }
};

export const login = async (email, password) => {
  try {
    const account = new Account(client);
    return account.createEmailSession(email, password);
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = async () => {
  try {
    const account = new Account(client);
    return account.deleteSession("current");
  } catch (error) {
    throw new Error(error);
  }
};

export const register = async (email, password, name) => {
  try {
    const account = new Account(client);
    return account.create("unique()", email, password, name);
  } catch (error) {
    throw new Error(error);
  }
};

export const googleAuth = () => {
  try {
    const account = new Account(client);
    return account.createOAuth2Session(
      "google",
      "http://localhost:3000/login",
      "http://localhost:3000/signup"
    );
  } catch (error) {
    throw new Error(error);
  }
};

export const githubAuth = () => {
  try {
    const account = new Account(client);
    return account.createOAuth2Session(
      "github",
      "http://localhost:3000/login",
      "http://localhost:3000/signup"
    );
  } catch (error) {
    throw new Error(error);
  }
};

// export const checkAuthenticated = () => {
//   try {
//     const account = new Account(client);
//     return account.getSession();
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export default client;
