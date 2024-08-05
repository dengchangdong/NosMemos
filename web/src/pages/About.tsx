import { Link } from "@mui/joy";
import Icon from "@/components/Icon";
import MobileHeader from "@/components/MobileHeader";

const About = () => {
  return (
    <section className="@container w-full max-w-5xl min-h-full flex flex-col justify-start items-center sm:pt-3 md:pt-6 pb-8">
      <MobileHeader />
      <div className="w-full px-4 sm:px-6 flex flex-col gap-4">
        <div className="w-full shadow flex flex-col justify-start items-start px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 text-black dark:text-gray-300">
          <a href="https://www.usememos.com" className="flex items-center gap-1" target="_blank">
            <img className="w-auto h-10 rounded-full" src="https://www.usememos.com/logo.png" alt="memos" />
            <span className="text-2xl">Momos</span>
          </a>
          <p className="text-base">一款注重隐私、轻量级的笔记服务。轻松捕捉并分享你的奇思妙想。</p>
        </div>
      </div>
    </section>
  );
};

export default About;
