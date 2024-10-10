# MathEditor

> A simple LaTeX math input editor component.

---

![Preview Image](https://i.ibb.co/x2TLRxf/Screenshot-2024-10-10-at-10-09-37-AM.png)

---

### Requirements

- React (duh)
- TailwindCSS

### Install

```bash
npm i https://github.com/pbtutoring/matheditor.git
```

### Example

```tsx
import { Latex, MathEditor } from "matheditor";
import { useState } from "react";
import "matheditor/dist/style.css";

function MyComponent() {
  const [latex, setLatex] = useState("");

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-10">
      <MathEditor
        value={latex}
        onChange={(newLatex) => setLatex(newLatex)}
        placeholder="My Latex Input"
      />

      <p className="font-serif">
        <Latex>{latex.replaceAll("\n", "<br />")}</Latex>
      </p>
    </div>
  );
}
```
