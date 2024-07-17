export const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '') // Remove special chars
      .replace(/\s+/g, '-')    // Replace spaces with dashes
      .trim();                 // Trim whitespace
  };
  