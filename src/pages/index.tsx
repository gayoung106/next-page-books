import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div>
      <section>
        <h3>지금 추천하는 도서</h3>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
