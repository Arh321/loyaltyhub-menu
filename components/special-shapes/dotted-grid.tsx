export default function DotGrid() {
  return (
    <div
      style={{
        backgroundImage: "url(/images/Rectangle-48.png)",
        backgroundRepeat: "repeat",
      }}
      className="w-full h-full relative"
    >
      <div
        style={{
          background: "linear-gradient(to right,#151518,transparent,#151518)",
        }}
        className="w-full h-full absolute inset-0 m-auto"
      ></div>
    </div>
  );
}
