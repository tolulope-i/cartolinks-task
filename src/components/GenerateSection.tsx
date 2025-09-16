import { FaAngleDown } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { FaVideo } from "react-icons/fa6";
import { ImMagicWand } from "react-icons/im";
import { FaChildReaching } from "react-icons/fa6";
import { TbMicrophone2 } from "react-icons/tb";
import { GiMeditation } from "react-icons/gi";
import { FaPaintbrush } from "react-icons/fa6";
import { MdOutlineModelTraining } from "react-icons/md";

const tools = [
  {
    title: "Image",
    desc: "Generate images with custom styles",
    tag: "New",
    bg: "bg-gradient-to-b from-blue-900 via-blue-800 to-gray-100",
    icon: <AiFillPicture />,
  },
  {
    title: "Edit",
    desc: "Add objects, change styles, or expand photos",
    bg: "bg-yellow-400",
    icon: <FaVideo />,
  },
  {
    title: "Video",
    desc: "Generate videos with AI tools",
    bg: "bg-gradient-to-b from-blue-400 via-blue-300 to-gray-100",
    icon: <FaPaintbrush />,
  },
  {
    title: "Realtime",
    desc: "Realtime AI rendering on a canvas",
    bg: "bg-gradient-to-b from-black via-gray-800 to-gray-100",
    tag: "New",
    icon: <ImMagicWand />,
  },
  {
    title: "Enhancer",
    desc: "Upscale and enhance images and videos",
    tag: "New",
    bg: "bg-gradient-to-b from-purple-900 via-purple-600 to-gray-300",
    icon: <GiMeditation />,
  },
  {
    title: "Video Lipsync",
    desc: "Lip sync any video to audio",
    bg: "bg-gradient-to-b from-green-900 via-green-600 to-yellow-300",
    tag: "New",
    icon: <TbMicrophone2 />,
  },
  {
    title: "Motion Transfer",
    desc: "Animate characters",
    bg: "bg-black",
    icon: <FaChildReaching />,
  },
  {
    title: "Train",
    desc: "Teach Krea to replicate your style",
    bg: "bg-gradient-to-b from-gray-900 via-white to-gray-300",
    icon: <MdOutlineModelTraining className="text-black text-xl " />,
  },
];

export default function GenerateSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6 bg-custom-primary">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-custom-primary">Generate</h2>
        <div className="flex justify-center items-center gap-2 text-blue-600">
          <FaAngleDown />
          <a className="text-sm text-blue-600 hover:underline">Show all</a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((t, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-4 rounded-xl bg-custom-tertiary hover:bg-custom-secondary transition-all ease-in-out duration-300 cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-lg ${t.bg} flex items-center justify-center text-white`}
            >
              {t.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm text-custom-primary">{t.title}</h3>
                {t.tag && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                    {t.tag}
                  </span>
                )}
              </div>
              <p className="text-xs text-custom-secondary">{t.desc}</p>
            </div>
            <button className="text-xs px-3 py-1 rounded-full button-bg text-custom-primary hover:button-bg-hover">
              Open
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}