import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null); // Metadata + custom profile attributes
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null); // Global error state

  // Utility to reset global errors
  const clearAuthError = () => setAuthError(null);

  // Sync state when session changes
  const syncUserState = (currentSession) => {
    setSession(currentSession);
    const currentUser = currentSession?.user ?? null;
    setUser(currentUser);

    if (currentUser) {
      // Extract metadata provided during sign-up (e.g., username, avatar_url)
      setProfile({
        id: currentUser.id,
        email: currentUser.email,
        username: currentUser.user_metadata?.username || "",
        avatarUrl: currentUser.user_metadata?.avatar_url || "",
        ...currentUser.user_metadata,
      });
    } else {
      setProfile(null);
    }
  };

  // Sign up with custom metadata
  async function signUpNewUser({ email, password, username, ...additionalMeta }) {
    clearAuthError();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            ...additionalMeta,
          },
        },
      });

      if (error) throw error;
      return { success: true, data };
    } catch (err) {
      console.error("Sign up error:", err);
      setAuthError(err.message);
      return { success: false, error: err.message };
    }
  }

  // Sign in
  async function signInUser({ email, password }) {
    clearAuthError();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return { success: true, data };
    } catch (err) {
      console.error("Sign in error:", err);
      setAuthError(err.message);
      return { success: false, error: err.message };
    }
  }

  // Sign out
  async function signOut() {
    clearAuthError();
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (err) {
      console.error("Sign out error:", err);
      setAuthError(err.message);
    }
  }

  // Helper to update user metadata dynamically
  async function updateUserProfile(newMetaData) {
    clearAuthError();
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: newMetaData,
      });

      if (error) throw error;

      // Update local state immediately
      setProfile((prev) => ({ ...prev, ...data.user.user_metadata }));
      setUser(data.user);
      return { success: true, data };
    } catch (err) {
      console.error("Profile update error:", err);
      setAuthError(err.message);
      return { success: false, error: err.message };
    }
  }

  useEffect(() => {
    // 1. Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      syncUserState(session);
      setLoading(false);
    });

    // 2. Auth listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      syncUserState(session);
      setLoading(false);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        profile,
        loading,
        authError,
        clearAuthError,
        signUpNewUser,
        signInUser,
        signOut,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);