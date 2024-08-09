import { useEffect, useRef } from "react";
import Quill, { QuillOptions } from "quill/core";
import Keyboard from "quill/modules/keyboard";
import "quill/dist/quill.core.css";
import "./index.css";

interface QuillEditorProps {
  options?: QuillOptions;
  onCreated?(quill: Quill): void;
}

Quill.register({
  // "modules/syntax": Syntax,
  "modules/keyboard": Keyboard
});

let quillIns: Quill | null = null;

export default function QuillEditor(props: QuillEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current) return;
    quillIns = new Quill(editorRef.current, {
      ...props.options
    });
    props.onCreated?.(quillIns);
  }, [props]);

  return <div ref={editorRef} />;
}
