// src/firebase/createAdmin.js
import { setDoc, doc } from "firebase/firestore"; // Firestore methods
import { db } from "../config/firbase"; // Ensure the path to db is correct

/**
 * Creates an initial admin user in Firestore.
 * @param {string} uid - Admin's user ID.
 * @param {string} email - Admin's email address.
 */
export const createInitialAdmin = async (uid, email) => {
  try {
    await setDoc(doc(db, "users", uid), {
      email: email,
      role: "admin", // Assign a role for the admin
      createdAt: new Date().toISOString(),
    });
    console.log("Admin user created successfully!");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
};
