import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges class names with Tailwind deduplication.
 * Usage: cn('px-4 py-2', isActive && 'bg-pulse-500', className)
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs))
}
