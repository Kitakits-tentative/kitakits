//doc:
//  - This file contains utility functions that are used across the project.
// DO NOT MODIFY THIS FILE

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
