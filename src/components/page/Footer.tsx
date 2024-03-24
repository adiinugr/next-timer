import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-base-content text-neutral-content">
      <div className="w-full max-w-screen-xl mx-auto p-10">
        <span className="block text-center">
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://fndigitalcode.com/"
            className="hover:underline font-semibold"
          >
            fndigitalcode.com
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
