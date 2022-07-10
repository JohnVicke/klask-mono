import React from "react";
import { QrReader } from "react-qr-reader";
import { useMediaQuery } from "../hooks/useMediaQuery";

export interface QrScannerResult {
  result?: string;
  error?: Error | null;
}

interface QrScannerProps {
  onScan: (params: QrScannerResult) => void;
}

export const QrScanner = ({ onScan }: QrScannerProps) => {
  const { isMobile } = useMediaQuery();
  return (
    <QrReader
      videoContainerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      scanDelay={300}
      constraints={{ facingMode: !isMobile ? "environment" : "user" }}
      onResult={(result, error) => {
        onScan({ result: result?.getText(), error });
      }}
    />
  );
};
