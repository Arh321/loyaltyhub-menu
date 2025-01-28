import Image from "next/image";
import bg from "../../../public/menu-welcome-bg.webp";
const WelcomeBAckGround = () => {
  return (
    <div className="w-full h-full">
      <Image
        src={bg}
        width={470}
        height={1000}
        alt="bg"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default WelcomeBAckGround;
