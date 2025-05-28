import { blogPosts } from "@/app/data/blog/blogPosts";
import { users } from "@/app/data/blog/users";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function UserPage({ params }) {
  const { userId } = params;
  const user = users.find((u) => u.id === Number(userId));

  if (!user) notFound();

  const userPosts = blogPosts.filter((post) => post.userId === user.id); // 篩選出該使用者的所有文章
  
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <img
          src={user.avatar}
          alt={`User ${user.id}'s avatar`}
          className="w-12 h-12 rounded-full"
        />
        <h1>使用者:#{user.id}:{user.name}</h1>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-6">
            技術文章
            <span className="text-2xl text-slate-500 ">
                    {userPosts.length}
            </span>
            篇:
        </h2>
<<<<<<< HEAD
        <div className="list-disc pl-5 p-4">
=======
        <div>
>>>>>>> ce541ea (123)
          {userPosts.map((post) => (
            <div key={post.id} className="p-4 shadow-sm rounded-lg mb-4">
              <Link
                href={`/blog/posts/${post.id}`} // 點擊文章標題跳轉至該文章的頁面
                className="text-blue-500 hover:text-blue-700"
              >
                {post.id}: {post.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
