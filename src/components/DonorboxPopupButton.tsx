import { useEffect } from "react";

export function DonorboxPopupButton({
  campaign = "donation-seruds-inc",
  label = "Donate",
  color = "#e75224",
  size = "medium",
}: {
  campaign?: string;
  label?: string;
  color?: string;
  size?: string;
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
    <span className="inline-block">
      {/* @ts-expect-error custom element */}
      <dbox-widget
        campaign={campaign}
        type="popup"
        button-label={label}
        button-type="regular"
        button-color={color}
        button-size={size}
      />
    </span>
  );
}
