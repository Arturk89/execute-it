import {
  Tooltip,
  IconButton as IconMuiButton,
  TooltipProps,
  IconButtonProps,
  Badge,
} from "@mui/material";

interface Props extends IconButtonProps {
  children: React.ReactNode;
  badgeNumber?: number;
  title?: string;
}

export function IconButton({ title, badgeNumber, children, ...props }: Props) {
  return (
    <Tooltip title={title ? title : ""}>
      <IconMuiButton size="medium" {...props}>
        <Badge badgeContent={badgeNumber ? badgeNumber : 0} color="primary">
          {children}
        </Badge>
      </IconMuiButton>
    </Tooltip>
  );
}
