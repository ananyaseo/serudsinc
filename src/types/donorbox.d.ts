declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "dbox-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          campaign?: string;
          type?: string;
          "button-label"?: string;
          "button-type"?: string;
          "button-color"?: string;
          "button-size"?: string;
          "regular-position"?: string;
          "show-icon"?: string;
          "enable-auto-scroll"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
