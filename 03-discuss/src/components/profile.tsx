"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From Client: {JSON.stringify(session.data.user, null, 2)}</div>;
  }

  return <div>From Client: User is NOT signed in</div>;
}
