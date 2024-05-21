import Link from "next/link";

import SocialLinks from "./SocialLinks";

const navigation = {
  main: [
    { name: "Contacto", href: "#contact" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#activities" },
    { name: "Tarifas", href: "#pricing" },
  ],
};

const Footer:React.FC = () => {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-500 hover:text-blue-400"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <SocialLinks color={"rgb(156 163 175)"} />
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; BrigantiumBox 2024. Todos los derechos reservados.
          <Link href="/aviso-legal" className="hover:text-blue-400 ml-4">
            Aviso Legal
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
