"use client";
 
import { createClient } from "@/lib/client";
import React, { useEffect, useState } from "react";

const UserGreetText = () => {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser(); 
  }, []);
    if (user !== null) {
      return (
        <div className="flex items-center font-mono">
          Hello&nbsp;
         { user.user_metadata.fullName ?? "user"}
        </div>
      );
    }
  return (
    <div className="flex w-[200px] flex-wrap text-right leading-tight text-sm">
      Signup or Login to track your progress
    </div>
  );
};

export default UserGreetText;