import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  name: string;
  category: string;
  price: string;
  discount: number;
  stock: number;
  startDate: Date;
  endDate: Date;
  status: "Ativo" | "Inativo"
}

const users: User[] = [
  {
    id: "1",
    name: "Iphone 16 Max",
    category: "Eletrônicos",
    price: "R$ 200,00",
    discount: 10,
    stock: 23,
    startDate: new Date("2021-04-01"),
    endDate: new Date("2021-04-01"),
    status: "Ativo"
  }
];

const TableHeader: FC = () => (
  <thead className="bg-[#2144e1]">
    <tr>
      {["Nome do Produto", "Categoria", "Preço", "Desconto (%)", "Estoque", "Data de Início", "Data de Término", "Status", "Ações"].map(
        (header) => (
          <th
            key={header}
            scope="col"
            className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-white"
          >
            {header}
          </th>
        )
      )}
    </tr>
  </thead>
);

const TableRow: FC<User> = ({
  name,
  category,
  price,
  discount,
  stock,
  startDate,
  endDate,
  status
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{name}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {category}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {price}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{discount}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{stock}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{startDate.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{endDate.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      <div
        className={` ${
          status === "Ativo"
            ? "text-green-700 font-bold"
            : "text-red-700 font-bold"
        }`}
      >
        {status}
      </div>
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap flex justify-start items-center">
      <NextLink href='/pages/project/edit'>
        <FiEdit
          className="cursor-pointer text-lg mr-2
      "
        />
      </NextLink>
      <RiDeleteBin7Line className="cursor-pointer text-xl
    "/>
    </td>
  </tr>
);

const Table: FC = () => {
  return (
    <section className="px-4 mx-auto w-full mt-10">
      <div className="mb-2">
        <span className="text-[#192231] font-bold text-2xl">
          Produtos
        </span>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block w-full py-2 align-middle">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-200">
                <TableHeader />
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-transparent dark:divide-gray-200">
                  {users.map((user) => (
                    <TableRow key={user.id} {...user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
