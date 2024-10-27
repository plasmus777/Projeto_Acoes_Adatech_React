import { useEffect, useRef } from "react";

type PopupProps = {
    estaAberto: boolean;
    aoFechar: () => void;
    children: React.ReactNode;
};

export default function Popup({ estaAberto, aoFechar, children }: PopupProps) {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (estaAberto) {
            const focusElement = popupRef.current?.querySelector("button, [tabindex]");
            (focusElement as HTMLElement)?.focus();

            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === "Escape") {
                    aoFechar();
                }
            };
            
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleKeyDown);

            return () => {
                document.body.style.overflow = "";
                document.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [estaAberto, aoFechar]);

    if (!estaAberto) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-lg relative">
                <button
                    onClick={aoFechar}
                    className="absolute top-2 right-2 text-gray-500 "
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
}