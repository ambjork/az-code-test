import {TypographyVariant} from "../../models/Typography.ts";
import {TextColors} from "../../models/Colors.ts";

type Props = {
  children: React.ReactNode;
  variant: TypographyVariant;
  color?: TextColors;
  align?: "text-left" | "text-center" | "text-right";
};

const Typography: React.FC<Props> = ({
  children,
  variant,
  color = "text-black",
  align = "text-left",
}) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={`public-sans-bold text-h1 leading-tight ${color} ${align}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`public-sans-bold text-h2-mobile md:text-h2 ${color} ${align}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`public-sans-bold text-h3-mobile md:text-h3 ${color} ${align}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`public-sans-bold text-h4-mobile md:text-h4 ${color} ${align}`}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`public-sans-semibold text-h5-mobile md:text-h5 ${color} ${align}`}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={`public-sans-semibold text-h6 ${color} ${align}`}>
          {children}
        </h6>
      );
    case "body-large":
      return (
        <p className={`ubuntu-bold text-body-large  ${color} ${align}`}>
          {children}
        </p>
      );

    case "body-medium":
      return (
        <p className={`ubuntu-regular text-body-medium ${color} ${align}`}>
          {children}
        </p>
      );

    case "body-small":
      return (
        <p className={`ubuntu-regular text-body-small ${color} ${align}`}>
          {children}
        </p>
      );
    case "body-mini":
      return (
        <p className={`ubuntu-regular text-body-mini ${color} ${align}`}>
          {children}
        </p>
      );
    case "body-mini-bold":
      return (
        <p className={`ubuntu-bold text-body-mini ${color} ${align}`}>
          {children}
        </p>
      );
    case "overline":
      return (
        <p
          className={`barlow-condensed-semibold text-overline uppercase ${color} ${align}`}
        >
          {children}
        </p>
      );
    case "button":
      return (
        <span
          className={`barlow-condensed-medium text-button uppercase ${color} ${align}`}
        >
          {children}
        </span>
      );
    case "caption":
      return (
        <span className={`public-sans-regular text-caption ${color} ${align}`}>
          {children}
        </span>
      );
    case "alert-message":
      return (
        <span
          className={`public-sans-regular text-alert-message ${color} ${align}`}
        >
          {children}
        </span>
      );
    case "logo-title":
      return (
        <span
          className={`barlow-condensed-bold text-logo-title uppercase tracking-logo-title-space ${color} ${align}`}
        >
          {children}
        </span>
      );
    case "footer-title":
      return (
        <span
          className={`barlow-condensed-bold text-h2 uppercase tracking-logo-title-space ${color} ${align}`}
        >
          {children}
        </span>
      );
    case "bullet-list":
      return (
        <span
          className={`ubuntu-regular text-body-medium pl-10 ${color} ${align}`}
        >
          <ul className="list-disc">{children}</ul>
        </span>
      );

    default:
      return (
        <span className={`ubuntu-regular ${color} ${align}`}>{children}</span>
      );
  }
};
export default Typography;
