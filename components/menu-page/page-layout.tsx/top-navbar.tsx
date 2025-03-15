export default function TopNavbar({
  right,
  center,
  left,
}: {
  right?: React.ReactNode | string | null;
  center?: React.ReactNode | string | null;
  left?: React.ReactNode | string | null;
}) {
  return (
    <div
      dir="rtl"
      className="grid grid-cols-3 justify-between items-center py-2"
    >
      <span className="flex justify-start">{right}</span>
      <span className="flex justify-center text-lg font-Yekan-Medium whitespace-nowrap">
        {center}
      </span>
      <span className="flex justify-end">{left}</span>
    </div>
  );
}
