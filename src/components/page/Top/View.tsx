import { UserTable } from "@/components/model/User/UserTable";

import { Spacer } from "@/components/ui/Spacer";

import { mockUserList } from "@/mocks/User";

import type { NextPage } from "next";

export const TopPageView: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center p-4 h-screen">
      <h1>Welcome to Nextwind Prototyping Template!</h1>
      <Spacer size={32} axis="horizontal" />
      <UserTable users={mockUserList} />
    </main>
  );
};
