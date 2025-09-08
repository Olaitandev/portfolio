import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container ">
        <div className="relative z-0 px-10 py-8 overflow-hidden text-center text-gray-900 bg-gradient-to-r from-emerald-100 to-sky-400 rounded-3xl md:text-left">
          <div
            className="absolute inset-0 -z-20 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          <div className="flex flex-col items-center gap-8 md:gap-16 md:flex-row">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together!
              </h2>
              <p className="mt-2 text-sm md:text-base ">
                Whether you&apos;re a startup or an established business,
                I&apos;m here to help you succeed.
              </p>
            </div>
            <div>
              <button className="inline-flex items-center h-12 gap-2 px-6 text-white bg-gray-900 border border-gray-900 rounded-xl text-nowrap">
                <span className="font-semibold">Get in Touch</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
