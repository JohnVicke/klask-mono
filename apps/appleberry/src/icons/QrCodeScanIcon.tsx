import React from "react";
import { Icon, IconProps } from "./Icon";

export const QrCodeScanIcon = (props: Pick<IconProps, "size">) => (
  <Icon {...props} icon="qr-scan-line" />
);
