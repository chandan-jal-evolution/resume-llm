import React, { FormEvent } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { PaperclipIcon, SendIcon } from "../icons";

export default function ChatInput({
  input,
  handleInputChange,
  onSubmit,
}: {
  input: string;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="sticky bottom-0 bg-white/80 px-4 py-2 dark:bg-gray-950/80">
      <form
        onSubmit={onSubmit}
        className="relative mx-auto max-w-2xl flex items-center gap-2"
      >
        <Textarea
          placeholder="Type your message..."
          value={input}
          onChange={handleInputChange}
          className="min-h-[48px] w-full rounded-2xl border border-gray-200 bg-gray-100 p-4 pr-16 text-sm shadow-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-800 dark:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-gray-600"
        />
        <label htmlFor="attachment">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full pointer-events-none shrink-0 bg-gray-900 p-1 text-white shadow-sm transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            <PaperclipIcon className="h-4 w-4" />
            <span className="sr-only">Attach file</span>
          </Button>
        </label>
        <input
          type="file"
          className="sr-only"
          name="attachment"
          id="attachment"
        />

        <Button
          type="submit"
          size="icon"
          className="rounded-full shrink-0 bg-gray-900 p-1 text-white shadow-sm transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          <SendIcon className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
}
