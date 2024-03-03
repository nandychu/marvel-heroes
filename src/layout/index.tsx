import { Navigate, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "../components/Header/Header";
type Props = {};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5,
};

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const Layout: React.FC<Props> = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate replace to={"/heroes"} />;
  }

  return (
    <div className="App">
      <Header></Header>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <main className="flex min-h-full flex-col items-center justify-center bg-blue-100 pt-16 text-black">
          <Outlet />
        </main>
      </motion.div>
    </div>
  );
};
