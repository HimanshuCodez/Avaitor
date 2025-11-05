import React from "react";
import { AlertCircle, RefreshCw, X } from "lucide-react";
import { motion } from "framer-motion";

export default function ServerProblemCard({
  title = "Server problem",
  message = "Please try again later.",
  onRetry = null,
  onClose = null,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="max-w-md mx-auto p-4 sm:p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-black via-gray-900 to-black/80 border border-red-700/30"
      role="alert"
      aria-live="assertive"
    >
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* left icon */}
        <div className="flex-shrink-0 rounded-lg p-3 bg-gradient-to-br from-red-800 to-red-600/95 shadow-sm">
          <AlertCircle className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-red-300">{title}</h3>
              <p className="mt-1 text-sm text-gray-300/90">{message}</p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              className="-mr-2 p-1 rounded-md hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5 text-gray-300/80" />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={onRetry}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/95 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-white font-medium shadow-md transition"
            >
              <RefreshCw className="w-4 h-4" />
              Retry
            </button>

            <div className="ml-auto text-xs text-gray-400">
              Status: <span className="text-red-300 font-medium">Offline</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-red-700/20">
              <div className="w-2 h-2 rounded-full bg-red-500 shadow-sm" />
              <div>
                <div className="text-[11px] text-gray-200/90">Last checked</div>
                <div className="text-[12px] text-gray-300">Just now</div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-red-700/20">
              <div className="w-2 h-2 rounded-full bg-gray-500 shadow-sm" />
              <div>
                <div className="text-[11px] text-gray-200/90">Retries</div>
                <div className="text-[12px] text-gray-300">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* decorative underline */}
      <div className="mt-5 h-1 rounded-full bg-gradient-to-r from-red-700 via-red-500 to-transparent opacity-80" />
    </motion.div>
  );
}
