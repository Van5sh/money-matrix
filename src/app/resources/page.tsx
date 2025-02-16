"use client";
import Blog from "@/app/components/blog";
import { UserAuth } from "@/app/context/AuthContext";

export default function Page() {
    const { user } = UserAuth();
    const currentUser = user?.displayName || "Guest"; // Handle undefined user

    return (
        <div className="flex flex-col gap-6 p-6 items-center justify-center min-h-screen bg-gray-100 overflow-auto">
            <h1 className="text-3xl font-semibold text-green-900">Latest Blogs</h1>
            <div className="w-full max-w-2xl flex flex-col gap-4">
                <Blog
                    createdAt={new Date()}
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi vitae pharetra orci. Duis eget vehicula ipsum, at dapibus lorem."
                    title="My First Blog"
                    user={currentUser}
                />
                <Blog
                    createdAt={new Date()}
                    content="Vestibulum vitae libero vitae sapien cursus accumsan. Sed vulputate lacus eu risus rhoncus, non ultrices justo condimentum."
                    title="A Day in React Native"
                    user={currentUser}
                />
                <Blog
                    createdAt={new Date()}
                    content="Curabitur faucibus tortor id nulla tristique, sed ornare mauris vehicula. Proin convallis dui ut ligula accumsan posuere."
                    title="Understanding Next.js"
                    user={currentUser}
                />
                <Blog
                    createdAt={new Date()}
                    content="Aliquam erat volutpat. Aenean sodales varius justo nec sollicitudin. Etiam vestibulum sapien sed felis interdum vulputate."
                    title="CSS Tips & Tricks"
                    user={currentUser}
                />
            </div>
        </div>
    );
}
