import { Spin } from "antd";
import dynamic from "next/dynamic";

const DynamicOptionsContainer = dynamic(
  () =>
    import(
      "@/components/splite-components/options-components/options-container"
    ),
  {
    ssr: false, // Optionally disable server-side rendering
    loading: () => <Spin />,
  }
);

const DynamicParticipantsComponent = dynamic(
  () =>
    import(
      "@/components/splite-components/participants-components/participants-container"
    ),
  {
    ssr: false, // Optionally disable server-side rendering
    loading: () => <Spin />,
  }
);

const DynamicResultComponent = dynamic(
  () =>
    import("@/components/splite-components/result-component/result-component"),
  {
    ssr: false, // Optionally disable server-side rendering
    loading: () => <Spin />,
  }
);

export {
  DynamicOptionsContainer,
  DynamicParticipantsComponent,
  DynamicResultComponent,
};
// You can now use these dynamic components in your application
