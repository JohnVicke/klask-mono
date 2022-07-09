import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useState } from "react";
import { QrScanner, QrScannerResult } from "../../components/QrScanner";

export const JoinGamePage = () => {
  const [addManualOpen, setAddManulOpen] = useState(false);
  const [scanResult, setScanResult] = useState<QrScannerResult>();

  const handleScan = useCallback(
    (data: QrScannerResult) => {
      if (data?.error) {
        if (!data?.error?.stack?.includes("t.selectBestPatterns")) {
          console.info(data.error);
        }
        return;
      }
      if (data?.result) {
        setScanResult(data);
      }
    },
    [scanResult],
  );

  const toggleModal = () => setAddManulOpen(!addManualOpen);

  return (
    <div>
      <div className="qr-scanner-container">
        <div className="inset-center z-10 flex items-center justify-between flex-col h-full w-full">
          <div className="w-full bg-black/40 h-full flex justify-center items-center">
            <h1>Scan QR code on game console</h1>
          </div>
          <div className="flex w-full h-[300px] align-center justify-center">
            <div className="bg-black/40 flex-1" />
            <div className="border-4 rounded-md h-[300px] w-[300px] border-primary" />
            <div className="bg-black/40 flex-1" />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full bg-black/40 px-4">
            <div className="divider w-full">OR</div>
            <button
              className="btn btn-primary w-full"
              type="button"
              onClick={toggleModal}
            >
              Add code manually
            </button>
          </div>
        </div>
        <QrScanner onScan={handleScan} />
      </div>
      <AnimatePresence>
        {addManualOpen && (
          <motion.div
            key="modal"
            initial={{ top: "100vh" }}
            animate={{ top: 0 }}
            exit={{ top: "100vh" }}
            transition={{
              top: { type: "spring", damping: 20, duration: 0.1 },
            }}
            className="w-full h-full !important px-4 flex items-center justify-center flex-col z-[999] bg-base-100 absolute top-[100vh]"
          >
            <form className="form-control flex flex-col w-full align-center justify-center">
              <label className="label">
                <span className="label-text">Code</span>
              </label>
              <input
                id="manul-code-input"
                type="text"
                placeholder="Game code..."
                className="input input-bordered w-full"
              />
            </form>
            <button
              className="btn btn-primary w-full mt-4"
              type="button"
              onClick={toggleModal}
            >
              Join game
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
