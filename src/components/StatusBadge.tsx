import React from 'react';

interface StatusBadgeProps {
  label: string;
  variant?: 'gold' | 'muted' | 'outline' | 'amber';
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  variant = 'gold',
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs sm:text-sm';

  const variantClasses = {
    gold: 'bg-champagne-gold/10 text-champagne-gold border border-champagne-gold/30',
    amber: 'bg-amber-500/10 text-amber-300 border border-amber-500/25',
    muted: 'bg-surface text-secondary-text border border-gold-border',
    outline: 'text-primary-text border border-champagne-gold/40',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full backdrop-blur-sm tracking-wide ${sizeClasses} ${variantClasses}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
      {label}
    </span>
  );
};
