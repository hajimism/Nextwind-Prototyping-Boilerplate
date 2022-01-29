import { UserTable } from "@/components/model/User/UserTable";

import { mockUserList } from "@/mocks/User";

import type { NextPage } from "next";

export const Top: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center p-4 h-screen">
      <UserTable users={mockUserList} />
    </main>
  );
};
