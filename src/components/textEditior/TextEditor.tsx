// import React, { useState, useRef } from "react";

const TextEditor = () => {
    // const [selection, setSelection] = useState<Range | null>(null);
    // const [showMenu, setShowMenu] = useState(false);
    // const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    // const editorRef = useRef<HTMLDivElement>(null);

    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const handleMouseUp = (event: React.MouseEvent) => {
    //     const selection = window.getSelection();
    //     if (selection && selection.toString().length > 0) {
    //         const range = selection.getRangeAt(0);
    //         setSelection(range);
    //         const rect = range.getBoundingClientRect();
    //         setMenuPosition({ x: rect.x - 300, y: rect.y - 200 });
    //         setShowMenu(true);
    //     } else {
    //         setShowMenu(false);
    //     }
    // };

    // const applyBold = () => {
    //     if (selection) {
    //         document.execCommand("bold");
    //         setShowMenu(false);
    //     }
    // };

    // const applyLink = () => {
    //     if (selection) {
    //         const url = prompt("Введите URL для ссылки:");
    //         if (url && selection) {
    //             const anchor = document.createElement("a");
    //             anchor.href = url;
    //             anchor.textContent = selection.toString();

    //             const range = selection;
    //             range.deleteContents();
    //             range.insertNode(anchor);

    //             setShowMenu(false);
    //         }
    //     }
    // };

    return (
        <div className="relative">
            {/* <div
                ref={editorRef}
                onMouseUp={handleMouseUp}
                contentEditable
                className="w-full h-48 p-4 border focus:outline-none">
                В компании есть два типа компенсации: недельная и суточная:
                Суточная компенсация доступна всем сотрудникам, которые работают
                в офисе или в гибридном формате. Недельная доступна только
                сотрудникам, которые официально работают на удалёнке.
            </div>

            {showMenu && (
                <div
                    className="absolute p-2 bg-white rounded-[16px] shadow-lg flex flex-col gap-[8px]"
                    style={{
                        top: menuPosition.y + window.scrollY,
                        left: menuPosition.x,
                    }}>
                    <button
                        onClick={applyBold}
                        className="block py-[8px] pl-[8px] pr-[10px] hover:bg-graphite hover:bg-opacity-[4%] rounded-[8px]">
                        <p>Жирный</p>
                    </button>
                    <button
                        onClick={applyLink}
                        className="block py-[8px] pl-[8px] pr-[10px] hover:bg-graphite hover:bg-opacity-[4%] rounded-[8px]">
                        <p>Ссылка</p>
                    </button>
                </div>
            )} */}
        </div>
    );
};

export default TextEditor;
