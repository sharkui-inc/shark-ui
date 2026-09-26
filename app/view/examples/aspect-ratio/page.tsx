import AspectRatioBasic from "./_examples/aspect-ratio-basic";
import AspectRatioPortrait from "./_examples/aspect-ratio-portrait";
import AspectRatioResponsive from "./_examples/aspect-ratio-responsive";
import AspectRatioRtl from "./_examples/aspect-ratio-rtl";
import AspectRatioSquare from "./_examples/aspect-ratio-square";
import AspectRatioVideo from "./_examples/aspect-ratio-video";

const AspectRatioExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
      <h1 className="font-medium text-muted-foreground" id="basic-heading">
        Basic
      </h1>
      <div className="rounded-3xl bg-muted p-6 sm:p-10">
        <AspectRatioBasic />
      </div>
    </section>

    <section aria-labelledby="square-heading" className="flex flex-col gap-5">
      <h2 className="font-medium text-muted-foreground" id="square-heading">
        Square
      </h2>
      <div className="rounded-3xl border bg-card p-6 sm:p-10">
        <AspectRatioSquare />
      </div>
    </section>

    <section aria-labelledby="portrait-heading" className="flex flex-col gap-5">
      <h2 className="font-medium text-muted-foreground" id="portrait-heading">
        Portrait
      </h2>
      <div className="rounded-3xl bg-muted p-6 sm:p-10">
        <AspectRatioPortrait />
      </div>
    </section>

    <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
      <h2 className="font-medium text-muted-foreground" id="rtl-heading">
        RTL
      </h2>
      <div className="rounded-3xl border bg-card p-6 sm:p-10">
        <AspectRatioRtl />
      </div>
    </section>

    <section aria-labelledby="video-heading" className="flex flex-col gap-5">
      <h2 className="font-medium text-muted-foreground" id="video-heading">
        Video
      </h2>
      <div className="rounded-3xl border bg-card p-6 sm:p-10">
        <AspectRatioVideo />
      </div>
    </section>

    <section
      aria-labelledby="responsive-heading"
      className="flex flex-col gap-5"
    >
      <h2 className="font-medium text-muted-foreground" id="responsive-heading">
        Responsive
      </h2>
      <div className="rounded-3xl bg-muted p-6 sm:p-10">
        <AspectRatioResponsive />
      </div>
    </section>
  </div>
);

export default AspectRatioExamplePage;
