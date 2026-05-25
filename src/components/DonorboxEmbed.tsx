import { useEffect } from "react";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "dbox-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          campaign?: string;
          type?: string;
          "enable-auto-scroll"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export function DonorboxEmbed({
  campaign = "donation-seruds-inc",
}: {
  campaign?: string;
}) {
  useEffect(() => {
    const id = "donorbox-widgets-js";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.type = "module";
    s.async = true;
    s.src = "https://donorbox.org/widgets.js";
    document.body.appendChild(s);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
      {/* @ts-expect-error custom element */}
      <dbox-widget
        campaign={campaign}
        type="donation_form"
        enable-auto-scroll="true"
      />
    </div>
  );
}
