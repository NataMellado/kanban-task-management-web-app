export const slugify = (text: string): string => {
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s]/g, '') // Remove special chars
      .replace(/\s+/g, '-')    // Replace spaces with dashes
      .trim();                 // Trim whitespace
      
    return slug || "default";
  };
  