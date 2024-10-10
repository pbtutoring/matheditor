import { createRef, useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { ExternalLinkIcon } from "./ExternalLinkIcon";
import { cn } from "../utils";
import { EditIcon } from "./EditIcon";
import { ImageIcon } from "./ImageIcon";

function MathEditor({
  className,
  value,
  onChange,
  placeholder,
}: {
  className?: string;
  value: string;
  onChange: (value: string) => any;
  placeholder?: string;
}) {
  const [mode, setMode] = useState<"edit" | "preview">("edit");

  const textareaRef = createRef<HTMLTextAreaElement>();

  const insertLatex = (latex: string) => {
    if (textareaRef.current) {
      textareaRef.current.value += latex;
      textareaRef.current.focus();
      handleOnChange({ target: { value: textareaRef.current.value } });
    }
  };

  const insertFraction = () => insertLatex("$\\frac{a}{b}$");
  const insertPower = () => insertLatex("$a^b$");
  const insertLine = () => insertLatex("$\\overline{ab}$");
  const insertTriangle = () => insertLatex("$\\triangle$");
  const insertAngle = () => insertLatex("$\\measuredangle$");

  const handleOnChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    onChange(value);
  };

  return (
    <div
      className={cn(
        "group relative flex w-full flex-col rounded-md font-serif shadow-md focus-within:rounded-t-none",
        className,
      )}
    >
      <div
        className={`absolute left-0 right-0 top-0 z-10 flex flex-row overflow-x-auto rounded-t-md border border-b-0 bg-gray-100 text-sm duration-100 ${mode === "edit" ? "group-focus-within:-top-[41px]" : ""}`}
        onClick={() => textareaRef.current?.focus()}
      >
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border bg-white hover:bg-gray-50 hover:shadow-lg"
          onClick={insertFraction}
        >
          <Latex>{"$\\frac{a}{b}$"}</Latex>
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border bg-white hover:bg-gray-50 hover:shadow-lg"
          onClick={insertPower}
        >
          <Latex>{"$a^b$"}</Latex>
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border bg-white hover:bg-gray-50 hover:shadow-lg"
          onClick={insertLine}
        >
          <Latex>{"$\\overline{ab}$"}</Latex>
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border bg-white hover:bg-gray-50 hover:shadow-lg"
          onClick={insertTriangle}
        >
          <Latex>{"$\\triangle$"}</Latex>
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border bg-white hover:bg-gray-50 hover:shadow-lg"
          onClick={insertAngle}
        >
          <Latex>{"$\\measuredangle$"}</Latex>
        </button>
      </div>
      <div
        className={`flex flex-row z-20 gap-1 rounded-t-md border border-b-none p-1 bg-gray-100 font-sans ${mode === "preview" ? "border-t rounded-t-md" : "group-focus-within:border-t-0 group-focus-within:rounded-t-none"}`}
      >
        <button
          className={`gap-2 text-xs px-4 py-1 cursor-pointer hover:bg-black/5 rounded-lg flex flex-row items-center justify-center font-medium text-gray-600 duration-100 ${mode === "edit" ? "bg-black/5" : ""}`}
          onClick={() => {
            setMode("edit");
            textareaRef.current?.focus();
          }}
        >
          <EditIcon className="h-3 w-3" />
          <span>Edit</span>
        </button>
        <button
          className={`gap-2 text-xs px-4 py-1 cursor-pointer hover:bg-black/5 rounded-lg flex flex-row items-center justify-center font-medium text-gray-600 duration-100 ${mode === "preview" ? "bg-black/5" : ""}`}
          onClick={() => {
            setMode("preview");
          }}
        >
          <ImageIcon className="h-3 w-3" />
          <span>Preview</span>
        </button>
      </div>
      {mode === "edit" ? (
        <textarea
          className={cn(
            "z-20 min-h-24 w-full rounded-md rounded-t-none border bg-white p-2 text-sm focus:rounded-b-none focus:outline-none",
            className,
          )}
          onChange={handleOnChange}
          value={value}
          placeholder={placeholder}
          ref={textareaRef}
        />
      ) : (
        <div className="z-20 min-h-24 w-fill rounded-md rounded-t-none border bg-white p-2 text-sm">
          <Latex>{value}</Latex>
        </div>
      )}
      <div
        className={`absolute bottom-0 left-0 right-0 z-10 rounded-b-md border border-t-0 bg-gray-50 p-1 font-sans text-xs font-medium text-gray-600 duration-100 ${mode === "edit" ? "group-focus-within:-bottom-[33px]" : ""}`}
        onClick={() => textareaRef.current?.focus()}
      >
        <button
          className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-md px-2 py-1 duration-100 hover:bg-black/5 w-full"
          onClick={() =>
            window.open("https://quickref.me/latex.html", "_blank")
          }
        >
          <span>Inputs are written in LaTeX</span>
          <ExternalLinkIcon className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

export { MathEditor };
