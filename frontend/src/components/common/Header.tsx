import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-myblue flex h-32 w-full items-center pl-5">
        <Link to={"/"}>
          <h1 className="text-myyellow text-6xl">
            <span className="font-bold">B</span>
            <span className="font-light">ook Store</span>
          </h1>
        </Link>
      </div>
    </>
  )
}
