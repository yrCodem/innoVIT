import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";

const Homepage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className=" min-h-screen flex items-center justify-center overflow-hidden ">
      <div className="glow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 pt-24 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-textColor">
            A Collaborative
            <br />
            <span className="gradient-text">Knowledge-Sharing Platform</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            A chance to learn, a place to grow.
          </p>

          {!isAuthenticated ? (
            <Link to={"/login"}>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-sora text-xl bg-textColor w-fit text-primary font-black p-4 pl-8 pr-8 rounded-full"
                >
                  Sign in
                </motion.button>
              </div>
            </Link>
          ) : (
            <div>
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-sora text-xl bg-textColor w-fit text-primary font-black p-4 pl-8 pr-8 rounded-full mr-2 "
              >
                <Link to="/study" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="black"
                  >
                    <path d="M564-541v-76q31-10 64-14.5t68-4.5q23 0 46.5 2.5T792-626v74q-30-7-53-10t-43-3q-34 0-67 6t-65 18Zm0 236v-76q28-9 60-14.5t72-5.5q27 0 50.5 3t45.5 8v74q-30-7-53-10t-43-3q-34 0-67 6t-65 18Zm0-118v-76q32-10 65.5-15t66.5-5q27 0 50.5 3t45.5 8v74q-26-7-49.5-10t-46.5-3q-32 0-64.5 6T564-423ZM264-251q47 0 92 12t88 30v-454q-42-22-87-33t-93-11q-37 0-73.5 6.5T120-679v452q35-13 71-18.5t73-5.5Zm252 42q43-20 88-31t92-11q37 0 73.5 4.5T840-227v-452q-35-13-71-20.5t-73-7.5q-48 0-93 11t-87 33v454ZM483-70q-50-31-104-55t-115-24q-34.59 0-69.29 8Q160-133 127-120q-38 17-74-4.16T17-186v-502q0-28 13-51.2 13-23.2 37-34.8 47-19 95-27.5t98.89-8.5q59.11 0 114.61 13.5T480-753q51-28 105.5-42.5T699.11-810q50.89 0 98.89 8.5t95 27.5q24 11.6 37.5 34.8Q944-716 944-688v517q0 36-29.5 53.5T853-116q-38-16-77.21-24.5-39.2-8.5-79.79-8.5-62 0-116.5 23.5T483-70Z" />
                  </svg>
                  <span className="ml-2">Explore Study Resources</span>
                </Link>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-sora text-xl bg-textColor w-fit text-primary font-black p-4 pl-8 pr-8 rounded-full ml-2 "
              >
                <Link to="/unicollab" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="black"
                  >
                    <path d="M-16-224v-75q0-59 50-92t134-33q7 0 13.5 1t15.5 2q-20 24-30.5 53.86t-10.5 60.7V-224H-16Zm240 0v-77q0-30.86 15-57.43T281-399q47-24 96.5-36.5t102-12.5q53.5 0 102.5 12.5t96 36.5q27 14 42.5 40.57T736-301v77H224Zm580 0v-83.37q0-32.32-11-60.91-11-28.59-31-52.72 11-1 17.61-2 6.62-1 12.39-1 85.2 0 134.6 33.37Q976-357.26 976-299v75H804Zm-461-99h274q-18-10-60-18.5t-76.5-8.5q-34.5 0-77 8.5T343-323ZM167.88-468Q134-468 110-491.91T86-549.4q0-34.6 23.91-58.6t57.49-24q34.6 0 58.6 23.61t24 58.51Q250-516 226.39-492t-58.51 24Zm624 0Q758-468 734-491.91t-24-57.49q0-34.6 23.91-58.6t57.49-24q34.6 0 58.6 23.61t24 58.51Q874-516 850.39-492t-58.51 24ZM479.5-495q-56.17 0-95.83-39.67Q344-574.33 344-631q0-56 39.67-96 39.66-40 96.33-40 56 0 96 40t40 96.5q0 56.17-40 95.83Q536-495 479.5-495Zm1-98q15.9 0 26.7-11.3 10.8-11.3 10.8-27.2 0-15.9-10.92-26.7Q496.15-669 480-669q-15.4 0-26.7 10.92Q442-647.15 442-631q0 15.4 11.3 26.7 11.3 11.3 27.2 11.3Zm-.5 270Zm0-308Z" />
                  </svg>
                  <span className="ml-2">Explore UniCollab</span>
                </Link>
              </motion.button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative"
        >
          {/* <div className="bg-gradient-to-b from-blue-500/10 to-transparent absolute inset-0 rounded-xl" />
          <img
            src="/platform-preview.png"
            alt="Platform Interface"
            className="w-full rounded-xl shadow-2xl"
          /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;
