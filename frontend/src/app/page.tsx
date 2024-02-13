import Card from "@/components/card";
import Feed from "@/components/feed";
import css from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={css.container}>
      <div className={css.contentOne}>
        <Card />
      </div>
      <div className={css.contentTwo}>
        <Feed />
      </div>
    </div>
  );
}
