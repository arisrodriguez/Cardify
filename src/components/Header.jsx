import { useState } from "react";

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full py-4 px-6 flex items-center justify-between bg-gray-50 border-b border-gray-200">
            {/* Logo */}
            <h1 className="text-3xl font-bold tracking-tight">Cardify</h1>

            {/* Menu desktop */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a
                    href="#description"
                    className="hover:text-blue-500 transition-colors"
                >
                    Descripción
                </a>

                <a
                    href="#cardlist"
                    className="hover:text-blue-500 transition-colors"
                >
                    Tarjetas
                </a>

                <a
                    href="#developer"
                    className="hover:text-blue-500 transition-colors"
                >
                    Desarrolladores
                </a>
            </nav>

            {/* Mobile button */}
            <button
                className="md:hidden flex flex-col gap-1"
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
            >
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
            </button>

            {/* Mobile menu */}
            {open && (
                <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 py-4 px-6 flex flex-col gap-4 text-sm font-medium md:hidden">
                    <a
                        href="#description"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-500 transition-colors"
                    >
                        Descripción
                    </a>

                    <a
                        href="#cardlist"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-500 transition-colors"
                    >
                        Tarjetas
                    </a>

                    <a
                        href="#developer"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-500 transition-colors"
                    >
                        Desarrolladores
                    </a>
                </div>
            )}
        </header>
    );
};
