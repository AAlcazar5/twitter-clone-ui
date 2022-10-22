import React, { useState, useEffect } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Post from "./Post";
import { posts } from "../postData";
import { useTheme } from "next-themes";

function Feed() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div
      className="xl:ml-[370px] border-l border-r border-gray-200 dark:border-gray
    -800 bg-gray-100 dark:bg-gray-900 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl"
    >
      <div className="flex py-2 px-3 sticky top-0 z-50  bg-white text-black dark:bg-gray-800 dark:text-white  border-gray-200 dark:border-gray-800">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>

        <div className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full flex items-center justify-center px-0 ml-auto w-9 h-9">
          <button onClick={switchTheme} aria-label="dark mode">
            {theme === "light" ? (
              <FontAwesomeIcon
                icon={faMoon}
                style={{ height: "24px", width: "24px" }}
                className=" dark:text-white m-auto"
              />
            ) : (
              <FontAwesomeIcon
                icon={faSun}
                style={{ height: "24px", width: "24px" }}
                className="dark:text-white m-auto"
              />
            )}
          </button>
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          className="hover:bg-gray-300 dark:hover:bg-gray-100 dark:hover:text-black"
        />
      ))}
    </div>
  );
}

export default Feed;
