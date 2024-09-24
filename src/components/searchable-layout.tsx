import { ReactNode } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <div>임시서치바</div>
      {children}
    </div>
  );
}
