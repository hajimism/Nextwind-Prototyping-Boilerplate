import { VFC } from "react";

import { ExLink } from "@/components/ui/ExLink";

import { UserProps, UserListProps } from "@/types/User";

const UserTableItem: VFC<UserProps> = ({ user }) => {
  const { id, name, gitHubUserName } = user;
  return (
    <tr className="whitespace-nowrap">
      <td className="py-4 px-6 text-sm text-gray-500">{id}</td>
      <td className="py-4 px-6">{name}</td>
      <td className="py-4 px-6">
        {gitHubUserName ? (
          <ExLink href={`https://github.com/${gitHubUserName}`}>
            {gitHubUserName}
          </ExLink>
        ) : (
          <span className="text-gray-300">{"none"}</span>
        )}
      </td>
    </tr>
  );
};

export const UserTable: VFC<UserListProps> = ({ users }) => {
  return (
    <div className="w-min border-b border-gray-200 shadow">
      <table className="divide-y divide-gray-300 table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 px-6 text-xs text-gray-500">ID</th>
            <th className="py-2 px-6 text-xs text-gray-500">Name</th>
            <th className="py-2 px-6 text-xs text-gray-500">GitHub</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {users.map((user) => (
            <UserTableItem user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
