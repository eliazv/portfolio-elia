"use client";

import { motion } from "framer-motion";

interface StoreButtonProps {
  href: string;
  icon: string;
  iconAlt: string;
  label: string;
  size?: "default" | "large";
}

const StoreButton = ({
  href,
  icon,
  iconAlt,
  label,
  size = "default",
}: StoreButtonProps) => {
  const sizeClasses = {
    default: "px-4 py-2 gap-2",
    large: "px-8 py-4 gap-3",
  };

  const iconSizeClasses = {
    default: "w-4 h-4",
    large: "w-6 h-6",
  };

  const textSizeClasses = {
    default: "text-sm",
    large: "text-base md:text-lg",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <div
        className={`group relative inline-flex items-center ${sizeClasses[size]} rounded-full bg-background/40 backdrop-blur-md border border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20`}
      >
        <img
          src={icon}
          alt={iconAlt}
          className={`${iconSizeClasses[size]} object-contain`}
        />
        <span
          className={`${textSizeClasses[size]} font-medium text-foreground/90 group-hover:text-primary transition-colors`}
        >
          {label}
        </span>
      </div>
    </motion.a>
  );
};

export default StoreButton;
