import { BlogList } from "../BlogList/BlogList";
import { HeroBlog } from "../HeroBlog/HeroBlog";

export function BlogAll() {
  return (
    <main>
      <HeroBlog />
      <BlogList />
    </main>
  );
}
