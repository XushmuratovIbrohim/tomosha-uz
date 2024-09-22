import Link from "next/link";

import { ROUTE_PATHS } from "@utils/constants/route-paths";

export default function nav() {
  return (
    <nav>
      <ul className="flex align-middle justify-between gap-[20px]">
        {
          ROUTE_PATHS.map(({ path, label }) => (
            <li key={path} className="">
              <Link
                href={path}
                className=""
              >
                {label}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}