// import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";

// export default function DarkToggle() {
//   const [dark, setDark] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   return (
//     <button
//       onClick={() => setDark(!dark)}
//       className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition"
//       aria-label="Toggle dark mode"
//     >
//       {dark ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );
// }
