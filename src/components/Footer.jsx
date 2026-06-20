import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-100 py-6 dark:border-white/10">
      <p className="container-x text-center text-[12.5px] text-gray-900 dark:text-gray-100">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
