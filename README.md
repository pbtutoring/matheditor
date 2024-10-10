# MathEditor

> A simple LaTeX math input editor component.

### Requirements

- React (duh)
- TailwindCSS

### Install

```bash
npm i https://github.com/pbtutoring/matheditor.git
```

### Example

```tsx
import { MathEditor, Latex } from "matheditor";
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

      <p>
        <Latex>{latex}</Latex>
      </p>
    </div>
  );
}
```
