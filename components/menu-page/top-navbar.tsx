export default function TopNavbar({
  right,
  center,
  left,
}: {
  right: React.ReactNode | string | null;
  center: React.ReactNode | string | null;
  left: React.ReactNode | string | null;
}) {
  return (
    <div dir="rtl" className="flex justify-between p-2  items-center">
      {right}
      {center}
      {left}
    </div>
  );
}
