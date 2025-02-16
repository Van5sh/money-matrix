"use client"; // Ensure this file runs on the client side

interface BlogProps {
    title: string;
    content: string;
    user: string;
    createdAt: Date;
}

const Blog: React.FC<BlogProps> = ({ title, user, content, createdAt }) => {
    return (
        <div className="flex flex-col border-l-8 w-full h-[40vh] max-w-2xl border-4 border-green-900 rounded-lg">
            <div className="flex flex-row justify-between w-full p-4 bg-green-900">
                <h1 className="text-2xl text-white capitalize">{title}</h1>
                <span className="text-md text-white capitalize">{user}</span>
            </div>
            <p className="flex-1 w-full p-4 overflow-hidden text-ellipsis">
                {content}
            </p>
            <div className="flex justify-end w-full p-2">
                <span className="text-sm text-gray-600">{createdAt.toLocaleDateString()}</span>
            </div>
        </div>
    );
};

export default Blog;
