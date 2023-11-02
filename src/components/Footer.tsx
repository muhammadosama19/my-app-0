import Link from "next/link";

export default function Footer() {
  return (
    <main>
      <footer className="footer footer-center p-4 bg-white text-base-content py-3">
        <aside>
          <p>Copyright by <Link href={'/@hasub'}>@hasub</Link> | <Link href={'/privacy'}><span className="text-blue-500">Privacy Policy</span></Link></p>
        </aside>
      </footer>
    </main>
  );
}
