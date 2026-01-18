'use client';

import toast, { Toaster as HotToaster } from 'react-hot-toast';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

// Custom Toast Provider
export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      gutter={12}
      toastOptions={{
        duration: 4000,
        style: {
          background: '#0a0f1c',
          color: '#f8fafc',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
        },
        success: {
          iconTheme: {
            primary: '#10b981',
            secondary: 'white',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: 'white',
          },
        },
      }}
    />
  );
}

// Custom Toast Functions
export const showToast = {
  success: (message: string) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-fade-in' : 'opacity-0'
        } flex items-center gap-3 px-4 py-3 bg-ui-surface border border-ui-border rounded-xl shadow-lg max-w-md`}
      >
        <CheckCircle className="w-5 h-5 text-status-success flex-shrink-0" />
        <p className="text-text-primary text-sm flex-1">{message}</p>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-text-tertiary hover:text-text-primary"
        >
          <X size={16} />
        </button>
      </div>
    ));
  },

  error: (message: string) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-fade-in' : 'opacity-0'
        } flex items-center gap-3 px-4 py-3 bg-ui-surface border border-status-error/30 rounded-xl shadow-lg max-w-md`}
      >
        <XCircle className="w-5 h-5 text-status-error flex-shrink-0" />
        <p className="text-text-primary text-sm flex-1">{message}</p>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-text-tertiary hover:text-text-primary"
        >
          <X size={16} />
        </button>
      </div>
    ));
  },

  warning: (message: string) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-fade-in' : 'opacity-0'
        } flex items-center gap-3 px-4 py-3 bg-ui-surface border border-status-warning/30 rounded-xl shadow-lg max-w-md`}
      >
        <AlertCircle className="w-5 h-5 text-status-warning flex-shrink-0" />
        <p className="text-text-primary text-sm flex-1">{message}</p>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-text-tertiary hover:text-text-primary"
        >
          <X size={16} />
        </button>
      </div>
    ));
  },

  info: (message: string) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-fade-in' : 'opacity-0'
        } flex items-center gap-3 px-4 py-3 bg-ui-surface border border-brand-blue/30 rounded-xl shadow-lg max-w-md`}
      >
        <Info className="w-5 h-5 text-brand-blue flex-shrink-0" />
        <p className="text-text-primary text-sm flex-1">{message}</p>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-text-tertiary hover:text-text-primary"
        >
          <X size={16} />
        </button>
      </div>
    ));
  },
};