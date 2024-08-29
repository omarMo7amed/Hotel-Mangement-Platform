"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
  pendingLabel = "Updating...",
  children,
}) {
  // we create Button bcz useFormStatus need to inside component i use it not Component contain Form
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {!pending ? children : pendingLabel}
    </button>
  );
}
