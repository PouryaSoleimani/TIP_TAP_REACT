import ShowUpdatedText from "@/components/ShowUpdatedText";
import TipTapEditor from "@/components/TipTapEditor";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-5">
      <h1>TIP_TAP_REACT</h1>
      <TipTapEditor />
      <ShowUpdatedText />
    </div>
  );
}
