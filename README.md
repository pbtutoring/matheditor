# MathEditor

> A simple LaTeX math input editor component.

---

![Preview GIF](https://i.ibb.co/bgF4W2G/CPT2410101313-448x321.gif)

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
import { MathEditor } from "matheditor";
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
    </div>
  );
}
```

### Options

- `value` (`string`): Value state
- `onChange` (`(newValue: string) => any`): Triggers any time content inside editor changes.
- `placeholder` (`string?`): Placeholder text
- `showLatexHelp` (`boolean?`) (default = `true`): Should the editor show the Latex help link at the bottom when focused in edit mode?
- `showInsertButtons` (`boolean?`) (default = `true`): Should the editor show the Latex insert buttons when focused in edit mode?
- `className` (`string?`): Added classnames
