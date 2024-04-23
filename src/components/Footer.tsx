import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center">
      <div className="footer-container flex justify-center items-center gap-5 py-4 border-t-4 border-[#ffb000] w-11/12">
        <p className="text-lg font-semibolt text-[#ffb000]">
          © Nikolay Gavazov 2024. All rights reserved.
        </p>
        <div className="flex gap-2">
          <Link target="_blank" href={"https://github.com/Nikolay-Gavazov"}>
            <img
              width={30}
              height={30}
              className="text-white"
              src="/assets/icons/git.svg"
            />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/nikolay-gavazov-484062155/"}
          >
            <img
              width={30}
              height={30}
              className="text-white"
              src="/assets/icons/li.svg"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
