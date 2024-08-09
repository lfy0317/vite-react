import { useRef } from "react";
import { QuillEditor } from "@/compontents";
import Quill from "quill/core";

interface ChatInpqutProps {
  onEnter?(value: string): void;
}

let quillIns: Quill | null = null;

export function ChatInput(props: ChatInpqutProps) {
  const enterHandler = () => {
    if (!quillIns) {
      return true;
    }
    const inputValue = quillIns.getText();
    quillIns.setText("");
    props.onEnter?.(inputValue);
    return false;
  };

  const bindings = useRef({
    enter: {
      key: "Enter",
      SHORTKEY: false,
      handler: enterHandler
    }
  });

  const onCreated = (quill: any) => {
    quillIns = quill;
  };

  return (
    <QuillEditor
      onCreated={onCreated}
      options={{
        placeholder: "Enter发送；Shift+Enter换行",
        modules: {
          keyboard: {
            bindings: bindings.current
          }
        }
      }}
    />
  );
}
