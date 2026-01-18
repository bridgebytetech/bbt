'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  onSelect: (value: string) => void;
  align?: 'left' | 'right';
  className?: string;
}

export function Dropdown({
  trigger,
  items,
  onSelect,
  align = 'left',
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item: DropdownItem) => {
    if (item.disabled) return;
    onSelect(item.value);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn('relative inline-block', className)}>
      {/* Trigger */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {/* Menu */}
      {isOpen && (
        <div
          className={cn(
            'absolute z-50 mt-2 min-w-[200px] py-2 bg-ui-surface border border-ui-border rounded-xl shadow-xl animate-scale-in',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSelect(item)}
              disabled={item.disabled}
              className={cn(
                'w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors',
                item.disabled
                  ? 'text-text-muted cursor-not-allowed'
                  : item.danger
                  ? 'text-status-error hover:bg-status-error/10'
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
              )}
            >
              {item.icon && <span className="w-5 h-5">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Select Dropdown
export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = 'Select option',
  label,
  error,
  disabled = false,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label className="block text-sm font-medium text-text-secondary mb-2">
          {label}
        </label>
      )}
      <div ref={selectRef} className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            'input flex items-center justify-between text-left',
            disabled && 'opacity-50 cursor-not-allowed',
            error && 'border-status-error',
            !selectedOption && 'text-text-tertiary'
          )}
        >
          <span>{selectedOption?.label || placeholder}</span>
          <ChevronDown
            size={18}
            className={cn(
              'transition-transform text-text-tertiary',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 py-2 bg-ui-surface border border-ui-border rounded-xl shadow-xl animate-scale-in max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={cn(
                  'w-full px-4 py-2.5 text-left text-sm transition-colors',
                  option.value === value
                    ? 'text-brand-blue bg-brand-blue/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-status-error">{error}</p>}
    </div>
  );
}