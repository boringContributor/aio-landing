export function createSlug(title: string) {
    // Convert the blog title to lowercase
    let slug = title.toLowerCase();
  
    // Replace spaces and special characters with hyphens
    slug = slug.replace(/\s+/g, '-'); // Replace spaces with hyphens
    slug = slug.replace(/[^a-z0-9-]/g, ''); // Remove special characters
  
    // Remove consecutive hyphens
    slug = slug.replace(/-{2,}/g, '-');
  
    // Remove hyphens from the beginning and end of the slug
    slug = slug.replace(/^-+|-+$/g, '');
  
    return slug;
  }


export function toGermanDate(date: string, options: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat("de-DE", options).format(new Date(date))
}